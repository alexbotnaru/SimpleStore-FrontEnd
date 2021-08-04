import Products from "../components/pages/Products";
import Contacts from "../components/pages/Contacts";
import Info from "../components/pages/Info";
import Cart from "../components/pages/Cart";
import VueRouter from 'vue-router'
import Vue from 'vue'
import MyAccount from "../components/pages/MyAccount";

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: Products },
    { path: '/contacts', component: Contacts },
    { path: '/info', component: Info },
    { path: '/cart', component: Cart },
    { path: '/account', component: MyAccount }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;
