<template>
  <el-container>
    <el-header>
      <el-menu class="el-menu-demo" mode="horizontal" :default-active="$route.path" router>
        <el-menu-item index="/main/program">程序人生</el-menu-item>
        <el-menu-item index="/main/remoreHome" >忆家乡</el-menu-item>
        <el-menu-item index="/main/english">英语角</el-menu-item>
        <el-menu-item index="/main/talk">闲言碎语</el-menu-item>
        <el-menu-item style="float: right;right: 15px;border-bottom:0px;">登陆</el-menu-item>
        <el-menu-item style="float: right;border-bottom:0px;">注册</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    components:{

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
