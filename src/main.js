import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify';
import router from './router';

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#88a2aa',
    secondary: '#d2d2d2',
    accent: '#bf4e30',
  },
});

new Vue({
  render: h => h(App)
}).$mount('#app')
