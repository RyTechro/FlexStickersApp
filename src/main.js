import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//createApp(App).use(createRouter()).mount('#app');

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

// new Vue({
//   // store,
//   // router,
//   render: (h) => h(App),
// }).$mount('#app');

let app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
