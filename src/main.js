import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Echo from 'laravel-echo';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
	broadcaster: 'pusher',
	key: process.env.VUE_APP_WEBSOCKETS_KEY,
	wsHost: process.env.VUE_APP_WEBSOCKETS_SERVER,
	wsPort: 6001,
	forceTLS: false,
	disableStats: true,
});

Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
