import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter, faInstagram, faFacebookF, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faTwitter, faInstagram, faFacebookF, faYoutube, faMagnifyingGlass);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
