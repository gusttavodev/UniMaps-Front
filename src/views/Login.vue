<template> 
    <v-container>
      <v-app id="inspire">
        <v-app id="inspire">
          <v-content class="fun">
            <v-container class="fill-height" fluid>
              <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                  <FormLogin />
                </v-col>
              </v-row>
            </v-container>
          </v-content>
        </v-app>
      </v-app>
    </v-container>
</template>

<script>
// @ is an alias to /src
import FormLogin from "@/components/userForm/FormLogin";

export default {
  name: "Login",
  components: {
    FormLogin,
  },
};
</script>

<style>
#login {
  width: 70px;
  height: 300px;
  border: 1px solid #0e0101;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  
}

body{
  background-color: whitesmoke;
  
}

.fun{
  background: whitesmoke;
   
}

</style>
