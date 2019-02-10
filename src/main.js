import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

export const bus = new Vue();
Vue.use(VeeValidate, {
  events: 'change'
});

new Vue({
  render: h => h(App)
}).$mount('#app');
