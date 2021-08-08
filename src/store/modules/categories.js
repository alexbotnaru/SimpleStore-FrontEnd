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
            const categories =  await fetch('/api/categories');
            commit('mutateList', await categories.json());
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