<template>
  <div class="blog-container">
    <vlabel></vlabel>
    <router-view/>
  </div>
</template>

<script>
  import Label from '../components/Label'
  export default {
    components:{
      'vlabel':Label
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>


<style scoped>

</style>
