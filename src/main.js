import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './reset.css'

import { createRouter, createWebHashHistory } from 'vue-router'  
import Home from './views/Home.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRightFromBracket, faBarsStaggered, faCalendarDays, faGear, faLocationPin, faMap, faTableColumns} from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

library.add(faBarsStaggered, faTableColumns, faMap, faLocationPin, faCalendarDays, faGear, faArrowRightFromBracket)


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
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')