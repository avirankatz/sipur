import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import Vuetify from 'vuetify';
import Axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css'; 
import 'vuetify/dist/vuetify.min.css';
import './registerServiceWorker';

const serverUrl: string = window.location.port === '8080' ? 'http://localhost:3010' : '';
const requester = Vue.extend({
  methods: {
    getLines: () => Axios.get(`${serverUrl}/ines`),
  },
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuetify, {
  rtl: true
});
new Vue({
  router,
  render: (h) => h(App),
  mixins: [requester],
}).$mount('#app');
