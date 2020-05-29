<template>      
<v-container>
    <v-row justify="center">
       <FormLogin />
    </v-row>
</v-container>  
  
</template>

<script>
// @ is an alias to /src
import FormLogin from "../components/userForm/FormLogin";

export default {
  name: "login",
  components: {
    FormLogin
  }
};
</script>


<style>
#login {
   width: 70px;
  height: 300px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
</style>
