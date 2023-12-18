import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue';
import Sport from "@/components/sport/Sport.vue";
import Football from "@/components/sport/Football.vue";
import Cyber from "@/components/cyber/Cyber.vue";
import League from "@/components/league/League.vue";
import Menu from "@/components/menu/Menu.vue";
import Profile from "@/components/menu/Profile.vue";
import BetsHistory from "@/components/menu/BetsHistory.vue";
import Bonus from "@/components/menu/Bonus.vue";
import Referal from "@/components/menu/Referal.vue";
import Notice from "@/components/menu/Notice.vue";
import Support from "@/components/menu/Support.vue";
import Hockey from "@/components/sport/Hockey.vue";
import Basketball from "@/components/sport/Basketball.vue";
import Tennis from "@/components/sport/Tennis.vue";
import Volleyball from "@/components/sport/Volleyball.vue";
import WalletConnect from "@/views/WalletConnect.vue";

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
                redirect: { name: 'Football' },
                children: [
                    {
                        path: 'football',
                        name: 'Football',
                        component: Football,
                    },
                    {
                        path: 'hockey',
                        name: 'Hockey',
                        component: Hockey,
                    },
                    {
                        path: 'basketball',
                        name: 'Basketball',
                        component: Basketball,
                    },
                    {
                        path: 'tennis',
                        name: 'Tennis',
                        component: Tennis,
                    },
                    {
                        path: 'volleyball',
                        name: 'Volleyball',
                        component: Volleyball,
                    },
                ]
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
                children: [
                    {
                        path: 'profile',
                        name: 'Profile',
                        component: Profile,
                    },
                    {
                        path: 'history',
                        name: 'History',
                        component: BetsHistory,
                    },
                    {
                        path: 'bonus',
                        name: 'Bonus',
                        component: Bonus,
                    },
                    // {
                    //     path: 'referal',
                    //     name: 'Referal',
                    //     component: Referal,
                    // },
                    {
                        path: 'notice',
                        name: 'Notice',
                        component: Notice,
                    },
                    {
                        path: 'support',
                        name: 'Support',
                        component: Support,
                    },
                ]
            },
        ],
    },
    {
        path: '/wallet-connect',
        component: WalletConnect,
        name: 'WalletConnect',
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     let isAuthenticated = JSON.parse(localStorage.getItem('walletConnected'))
//     if (to.name !== 'WalletConnect' && !isAuthenticated) {
//         next({name: 'WalletConnect'})
//     } else next()
// })

export default router
