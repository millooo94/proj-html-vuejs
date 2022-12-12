import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faComments,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter, faInstagram, faFacebookF, faYoutube, faGoogleDrive,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass, faBookOpenReader, faEarthAmericas, faArrowRightFromBracket,
  faLocationDot, faPhoneFlip, faEnvelope, faLink, faChevronRight, faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(
  faTwitter,
  faInstagram,
  faFacebookF,
  faYoutube,
  faMagnifyingGlass,
  faGoogleDrive,
  faBookOpenReader,
  faEarthAmericas,
  faHeart,
  faArrowRightFromBracket,
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
  faLink,
  faChevronRight,
  faComments,
  faChevronUp,
);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
