import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'  
import Home from './views/Home.vue'

const router = createRouter
    history: createWebHashHistory
    routes: [
        {
                path: '/',
                component: Home
        }
    ]

createApp(App).mount('#app')
