import { createApp } from 'vue'
import App from './App.vue'
import './reset.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRightFromBracket, faBarsStaggered, faBell, faCalendarDays, faChevronLeft, faChevronRight, faCircle, faGear, faLocationPin, faMagnifyingGlass, faMap, faTableColumns} from '@fortawesome/free-solid-svg-icons'

library.add(faBarsStaggered, faTableColumns, faMap, faLocationPin, faCalendarDays, faGear, faArrowRightFromBracket, faMagnifyingGlass, faBell, faCircle, faChevronLeft, faChevronRight)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')