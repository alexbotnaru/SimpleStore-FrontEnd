import {fetchCategories} from "@/api/999";
export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false,

    },
    getters: {
        getList(state){
            return state.list
        },
        getIsLoading(state){
            return state.isLoading
        }

    },
    actions: {
        async fetchCategories({commit}){
            commit('mutateLoading', true);
            const categories =  await fetchCategories();
            commit('mutateList', categories.data);
            commit('mutateLoading', false);
        }
    },
    mutations: {
        mutateList(state, payload){
            state.list = payload;

        },
        mutateLoading(state, payload){
            state.isLoading = payload;

        }

    }
}