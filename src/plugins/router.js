import Vue from 'vue'
import Router from 'vue-router'
import main from "@/components/main";
import works from "@/components/works";
import aboutus from "@/components/aboutus";
import contact from "@/components/contact";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'top',
            component: main
        },
        {
            path: '/works',
            name: 'works',
            component: works
        },
        {
            path: '/about',
            name: 'about',
            component: aboutus
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        }
    ]
})