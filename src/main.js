import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

import './registerServiceWorker';

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://webdesignnop.nl/';

// axios.interceptors.response.use(undefined, function(error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       store.dispatch("LogOut");
//       return router.push("/login");
//     }
//   }
// });

// Vue.config.productionTip = false;

let pinia = createPinia();

let app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
