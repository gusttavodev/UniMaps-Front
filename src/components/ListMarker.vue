<template>
  
    <v-list>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in markers" :key="i">
          <!-- <v-list-item-avatar v-if="avatar">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar> -->
          <v-list-item-content v-if="item">
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle              
              v-html="item.description"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
 
</template>

<script>
export default {
  item: 5,
  name: "ListMarker",
  props: {
    markers: Array
  },
  mounted() {
    console.log("markers",this.markers);    
  },
  computed:{
   activeSection(){ return this.active;}
  },
  data: () => ({
   
  }),
};
</script>
