import {encode} from "js-base64";
import {fetchSuggestions} from '@/api/999'
import {fetchProducts} from "@/api/999";

export default {
    namespaced: true,
    state:{
        list: [],
        isLoading: false,
        searchList: [],
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
            return state.searchList ?? [];
        },
        getIsSearchLoading(state) {
            return state.isSearchLoading;
        }

    },
    actions: {
        async loadProducts(store, {link, page = 1}){
            store.commit('mutateIsLoading', true);
            let appender = link.includes('?') ? '&' : '?';
            let params = encode(`${link}${appender}page=${page}&hide_duplicates=yes`);

            let products = await fetchProducts(params);
            products = await products.data

            store.commit('productHistory/mutateItem', products, {root: true});
            if (page > 1){
                store.commit('mutateNewList', products);
            } else {
                store.commit('mutateList', products);
            }
            store.commit('mutateIsLoading', false);
        },
        async searchSuggestions(store, payload){
            store.commit('mutateIsSearchLoading', true);
            const suggestions = await fetchSuggestions(payload);

            store.commit('mutateSearch', suggestions.data?.suggestions);
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