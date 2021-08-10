export default {
    namespaced: true,
    state:{
        list: [],
        isLoading: false

    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
        getList(state) {
            return state.list;
        }

    },
    actions: {
        async loadProducts(store, {link, page}){

            store.commit('mutateIsLoading', true);
            const products = await fetch(`/api/products?link=${link}?page=${page}`);
            if (page > 1){
                store.commit('mutateNewList', await products.json());
            } else {
                store.commit('mutateList', await products.json());
            }
            store.commit('mutateIsLoading', false);
        },
        async searchProducts(store, payload){
            store.commit('mutateIsLoading', true);
            const searchResult = await fetch(`/api/products?link=/ru/search?query=${payload}`);
            store.commit('mutateList', await searchResult.json());
            store.commit('mutateIsLoading', false);
        }
    },
    mutations: {
        mutateList(state,payload){
            state.list = payload;
        },
        mutateIsLoading(state, payload){
            state.isLoading = payload;
        },
        mutateNewList(state, payload){
            state.list = state.list.concat(payload);
        }
    }
}