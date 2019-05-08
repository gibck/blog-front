<template>
  <el-container>
    <el-main style="padding: 0px;">
      <el-carousel :interval="4000" type="card" height="260px">
        <el-carousel-item v-for="item in 6" :key="item">
          <img style="" :src="`/../static/${item}.jpg`">
        </el-carousel-item>
      </el-carousel>


    </el-main>
  </el-container>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>


<style scoped>
  .el-carousel__item{
    background: rgba(255,255,255,0.15);
  }
  .el-carousel__item img {
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


</style>
