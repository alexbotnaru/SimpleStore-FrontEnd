import Products from "../components/pages/Products";
import Contacts from "../components/pages/Contacts";
import Info from "../components/pages/Info";
import Cart from "../components/pages/Cart";
import VueRouter from 'vue-router'
import Vue from 'vue'
import MyAccount from "../components/pages/MyAccount";
import Item from "../components/pages/Item";

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/products' },
    { name: 'products', path: '/products', component: Products, props: (router) => ({link: router.query.link}) },
    { name: 'contacts', path: '/contacts', component: Contacts },
    { name: 'info', path: '/info', component: Info },
    { name: 'cart', path: '/cart', component: Cart },
    { name: 'account', path: '/account', component: MyAccount },
    { name: 'item', path: '/item/:id', component: Item, props: true }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;
