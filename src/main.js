import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './reset.css'

import { createRouter, createWebHashHistory } from 'vue-router'  
import Home from './views/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
                path: '/',
                component: Home
        },
        {
            path: '/about',
            component: () => import('./views/About.vue')
        }

    ]
})

createApp(App).use(router).mount('#app')
