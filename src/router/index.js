import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue';
import Sport from "@/components/Sport.vue";
import Cyber from "@/components/Cyber.vue";
import League from "@/components/League.vue";
import Menu from "@/components/Menu.vue";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        redirect: { name: 'Sport' },
        children: [
            {
                path: 'sport',
                name: 'Sport',
                component: Sport,
            },
            {
                path: 'cyber',
                name: 'Cyber',
                component: Cyber,
            },
            {
                path: 'league',
                name: 'League',
                component: League,
            },
            {
                path: 'menu',
                name: 'Menu',
                component: Menu,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
