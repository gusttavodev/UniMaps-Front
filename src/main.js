import Vue from "vue";
import App from "./App.vue";
import {routes} from "./routes.js";
import StoreData from "./store.js"

import * as VueGoogleMaps from "vue2-google-maps";
import Vuelidate from "vuelidate";
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Vuetify from "vuetify";
import '@mdi/font/css/materialdesignicons.css'
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";
// Vuelidate para validações
Vue.use(Vuelidate);
// Vuetify Extension
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBo7bGaEkoB45d5TQzelkIu39a23Em4HSM",
    libraries: "places"
  }
});

Vue.use(Vuex)
const store = new Vuex.Store(StoreData)
const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
router.beforeEach((to, from, next) => {
  const requiredAuth = to.matched.some(record => record.meta.requiredAuth)
  const currentUser = store.state.currentUser
  console.log("currentUser", currentUser);
  console.log("requiredAuth", requiredAuth);
  if (requiredAuth && !currentUser) {
    next('/login')
  } else if (to.path == '/login' && currentUser) {
    next('/home')
  } else {
    next()
  }
})


new Vue({
  render: h => h(App),
  router, 
  store,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi', 
    },
  }),
  props: {
    source: String,
  },
  
}).$mount("#app")
