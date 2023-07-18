import useStore from './store';
import { Button } from 'antd';
const Dashboard = () => {
    const { count, loading, changeLoadingStatus } = useStore();
    return (
        <>
            <span>{count}</span>
            <Button type="primary" onClick={changeLoadingStatus} loading={loading}>add</Button>
            <Button type="dashed" onClick={changeLoadingStatus}>Stop Loading</Button>
        </>
    )
}

export default Dashboard;