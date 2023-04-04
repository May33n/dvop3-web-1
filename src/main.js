import { createApp } from 'vue'
import App from './App.vue'
import './reset.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRightFromBracket, faBarsStaggered, faCalendarDays, faGear, faLocationPin, faMap, faTableColumns} from '@fortawesome/free-solid-svg-icons'

library.add(faBarsStaggered, faTableColumns, faMap, faLocationPin, faCalendarDays, faGear, faArrowRightFromBracket)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')