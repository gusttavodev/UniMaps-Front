import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import * as VueGoogleMaps from "vue2-google-maps";
import Vuelidate from "vuelidate";

import Vuetify from "vuetify";
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

new Vue({
  render: h => h(App),
  router,   
  vuetify: new Vuetify(),
  props: {
    source: String,
  },
}).$mount("#app")
