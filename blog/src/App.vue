<template>
  <div id="app">
    <Nav-component></Nav-component>
    <router-view></router-view>
  </div>
</template>
<script>
import NavComponent from './components/NavComponent.vue';
export default {
  data() {
    return {    
    };
  },
  components:{
    NavComponent
  }
};
</script>
<style scoped>

</style>
