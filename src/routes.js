
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Cadastro from "./views/Cadastro.vue";

export const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Cadastro",
    component: Cadastro
  }, 
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiredAuth: true
    }
  }
];

