export default {
    namespaced: true,
    state:{
        list: [],
        isLoading: false,
        searchList: {},
        isSearchLoading: false
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
        getList(state) {
            return state.list;
        },
        getSearchSuggestionsList(state) {
            return state.searchList?.suggestions ?? [];
        },
        getIsSearchLoading(state) {
            return state.isSearchLoading;
        }

    },
    actions: {
        async loadProducts(store, {link, page = 1}){
            store.commit('mutateIsLoading', true);
            let questionMark = '?';
            if (link.includes('?')) questionMark = '&' ;

            // let linkParam = btoa(`${link}${questionMark}page=${page}`);
            //@fixme doesnt work (Internal Server Error)
            const products = await fetch(`/api/products?link=${link}${questionMark}page=${page}`);
            const result = await products.json();
            store.commit('productHistory/mutateItem', result, {root: true});
            if (page > 1){
                store.commit('mutateNewList', result);
            } else {
                store.commit('mutateList', result);
            }
            store.commit('mutateIsLoading', false);
        },
        async searchSuggestions(store, payload){
            store.commit('mutateIsSearchLoading', true);
            const suggestions = await fetch(`/api/suggestions?query=${payload}`);
            store.commit('mutateSearch', await suggestions.json());
            store.commit('mutateIsSearchLoading', false);

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
        },
        mutateIsSearchLoading(state, payload){
            state.isSearchLoading = payload;
        },
        mutateSearch(state, payload){
            state.searchList = payload;
        }
    }
}