<template>
  <div class="home">    
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
