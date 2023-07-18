import qs from 'qs';
import axios from 'axios';

function generateReqKey(config) {
    const { method, url, params, data } = config;
    return [method, url, qs.stringify(params), qs.stringify(data)].join('&');
}

const pendingRequest = new Map();
function addPendingRequest(config) {
    const requestKey = generateReqKey(config);
    config.cancelToken = config.cancelToken || new axios.CancelToken( cancel => {
        if(!pendingRequest.has(requestKey)) {
            pendingRequest.set(requestKey, cancel);
        }
    })
}

function removePendingRequest(config) {
    const requestKey = generateReqKey(config);
    if (pendingRequest.has(requestKey)) {
        const cancelToken = pendingRequest.get(requestKey);
        cancelToken(requestKey);
        pendingRequest.delete(requestKey);
    }
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost',
    timeout: 20000
});

axiosInstance.interceptors.request.use(
    config => {
        // 检查是否存在重复请求，若存在则取消已发的请求
        // 把当前请求信息添加到pendingRequest对象中
        removePendingRequest(config);
        addPendingRequest(config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        // 从pendingRequest对象中移除请求
        removePendingRequest(response.config);
        return response; 
    },
    error => {
        removePendingRequest(error.config || {});
        if (axiosInstance.isCancel(error)) {
            console.log('已取消的重复请求：' + error.message);
        } else {
            // todo 异常处理
        }
        return Promise.reject(error);
    }
);