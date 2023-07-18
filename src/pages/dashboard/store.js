import {create} from 'zustand';
// define the store
const useStore = create((set) => ({
    count: 1, 
    increase: () => set((state) => ({ count: state.count + 1 })),
    loading: false,
    changeLoadingStatus: () => set((state) => ({ loading: !state.loading}))
}));

export default useStore;
