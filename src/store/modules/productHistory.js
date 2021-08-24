export default {
    namespaced: true,
    state: {
        items: {}
    },
    getters: {
        getItem: (state) => (id) => state.items[id]
        // getItem: (state) => (id) => {
        //     return state.items.find(item => item.id === id);
        // }
        // getItem(state){
        //     return state.items;
        // }
    },
    actions: {


    },
    mutations: {
        mutateItem(state, itemsList){
            for(let item of itemsList ){
                const price = item.price;
                const lastPrice = state.items?.[item.link]?.price[state.items?.[item.link]?.price.length - 1];
                let priceList = state.items[item.link]?.price ?? [];
                if (price !== lastPrice){
                    priceList.push(price);

                }
                state.items[item.link] = {price: priceList};


            }
        }
    }
}