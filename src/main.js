import { createApp } from 'vue'

import App from './App.vue'

// bootstrap
import * as bootstrap from 'bootstrap'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as fullStar } from '@awesome.me/free-solid-svg-icons'
import { faStar as emptyStar } from '@awesome.me/free-regular-svg-icons'
import { all } from '@awesome.me/free-brands-svg-icons'

/* add icons to the library */
library.add(fullStarr, emptyStar);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
