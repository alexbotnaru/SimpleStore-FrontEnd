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

            const itemDetails = await fetch(`/api/item?link=/ru/${payload}`);
            const result = await itemDetails.json();
            console.log(result)
            store.commit('mutateItem', result);
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