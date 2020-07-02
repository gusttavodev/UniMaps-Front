<template>
  <v-card class="mx-auto justify-center" max-width="500" >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Login</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
      ></v-avatar>
    </v-card-title>

    <v-window id="card">
      <v-window-item>
        <v-card-text>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            :counter="3"
            label="Senha"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            type="password"
          ></v-text-field>

          <!-- <b-alert v-model="errorAlert" variant="danger" dismissible>
            {{ errMsg }}
          </b-alert> -->
          <span class="caption grey--text text--darken-1">
            Não tem uma conta ainda ?
          </span>
          <span class="caption grey--text text--darken-1">
            <router-link to="/register">
              Cadastrar-se
            </router-link>           
          </span>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-card-actions id="card">
      <v-spacer></v-spacer>

      <v-btn color="primary" depressed @click="submit">
        Entrar
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import Crud from "../../services/loginApi";

export default {
  name: "FormLogin",

  mixins: [validationMixin],
  // Validações
  validations: {
    password: { required, minLength: minLength(3) },
    email: { required, email }
  },

  data: () => ({
    email: "",
    password: "",
    errorAlert: false,
    errMsg: ""
  }),

  computed: {
    //Mensagem de erro da senha
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      // Menro que o minLength
      !this.$v.password.minLength &&
        errors.push("Senha deve ser maior que 3 digitos");
      // Vazio
      !this.$v.password.required && errors.push("Preencha a senha.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      // Não é email
      !this.$v.email.email && errors.push("E-mail não cadastrado");
      // Vazio
      !this.$v.email.required && errors.push("Preencha o E-mail");
      return errors;
    }
  },

  methods: {
    async submit() {
      // Pŕe validate
      this.$v.$touch();
      //Chama o evento de actions em store.js VueX
      this.$store.dispatch('login');
      if (!this.$v.$invalid) {
        const response = await this.login();
        console.log("response", response);
        
        if (response.status === 200) {
          alert("Logado com sucesso!");         
          this.$router.push('/home')
        } else if (response.statusCode === 401) {
          this.showErrorAlert(response.message);
        }
      }
    },
    async login() {
      try {
        let user = {
        password: this.password,
        email: this.email
        };
        const response = await Crud.login(user);
         this.$store.commit("loginSucess", response)
        return response;
      } catch (error) {
        this.$store.commit("loginFailed", error)
        return error;
      }      
    },

    showErrorAlert(msg) {
      this.errorAlert = true;
      this.errMsg = msg;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  color: brown;
}
#card{
  background:rgba(84, 155, 74, 0.123);

}
</style>
