import {fetchItem} from "@/api/999";
export default {
    namespaced: true,
    state: {
        item: {},
        isLoading: false
    },
    getters: {
        getItem: ({item}) => item
    },
    actions: {
        async loadItem(store, payload){
            store.commit('mutateIsLoading', true);

            let itemDetails = await fetchItem(`/ru/${payload}`);

            store.commit('mutateItem', itemDetails.data);
            store.commit('mutateIsLoading', false);
        }

    },
    mutations: {
        mutateIsLoading(state, payload){
            state.isLoading = payload;
        },
        mutateItem(state, payload){
            state.item = payload;
        }

    }
}