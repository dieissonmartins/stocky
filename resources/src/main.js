import store from "./store";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Auth from './auth/index.js';
window.auth = new Auth();
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from "vee-validate/dist/rules";

localize({
  br: {
    messages: {

      required: 'Este campo é obrigatório',
      required_if: 'Este campo é obrigatório',
      regex: 'Este campo deve ser válido',
      mimes: `Este campo deve ter um tipo de arquivo válido.`,
      size: (_, { size }) => `Este tamanho de campo deve ser menor que ${size}.`,
      min: 'Este campo não deve ter menos que {length} personagens',
      max: (_, { length }) => `Este campo deve ter no máximo ${length} palavras`
    }
  },
});
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

import StockyKit from "./plugins/stocky.kit";
Vue.use(StockyKit);
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

import VueExcelXlsx from "vue-excel-xlsx";
Vue.use(VueExcelXlsx);

window.axios = require('axios');
window.axios.defaults.baseURL = '/api/';

window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use((response) => {

  return response;
}, (error) => {
  if (error.response && error.response.data) {
    if (error.response.status === 401) {
      window.location.href='/login';
    }

    if (error.response.status === 404) {
      router.push({ name: 'NotFound' });
    }
    if (error.response.status === 403) {
      router.push({ name: 'not_authorize' });
    }

    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

import '@trevoreyre/autocomplete-vue/dist/style.css';

window.Fire = new Vue();

import Breadcumb from "./components/breadcumb";
import { i18n } from "./plugins/i18n";

Vue.component("breadcumb", Breadcumb);

Vue.config.productionTip = true;
Vue.config.silent = true;
Vue.config.devtools = false;

new Vue({
  store,
  router,
  VueCookie,
  i18n,
  render: h => h(App),
}).$mount("#app");
