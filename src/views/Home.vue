<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <google-map />
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: "Home",
  components: {
    GoogleMap
  }
};
</script>
