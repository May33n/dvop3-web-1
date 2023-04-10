import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/map',
			component: () => import('../views/Map.vue')
		},
		{
			path: '/saved',
			component: () => import('../views/Saved-location.vue')
		},
		{
			path: '/calendar',
			component: () => import('../views/Calendar.vue')
		},
		{
			path: '/settings',
			component: () => import('../views/Settings.vue')
		},
	],
})

export default router