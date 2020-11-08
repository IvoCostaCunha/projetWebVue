import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import Restaurants from "./components/restaurants.vue"
import RestaurantDetail from "./components/restaurantDetail.vue"
import Accueil from "./components/accueil.vue"
import Reserver from "./components/reserver.vue"
import Admin from "./components/admin.vue"

// configs...
Vue.use(VueMaterial);
Vue.config.productionTip = false;
Vue.use(VueRouter);

// config du router :
const router = new VueRouter({
	routes:[
		{ 
			path: '/', 
			component: Accueil
		},

		{ 
			path: '/restaurants', 
			component: Restaurants 
		},

		{ 
			path: '/restaurant/details:id:name:cuisine', 
			component: RestaurantDetail 
		},

		{
			path: '/restaurant/reserver:id',
			component: Reserver
		},

		{
			path: '/restaurants/admin:id',
			component: Admin
		}
	],
	mode:'history'
});

new Vue({
	router,
	render: h => h(App), // si router pas de rendu de composant
}).$mount('#app')
