<template>
  <div id="app" style="height: 100%;">
    <el-container>
      <el-aside width="200px"><vleft></vleft></el-aside>
      <el-container>
        <el-main style="padding:0px;max-height: 100vh"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Vleft from './components/Left'
  import Vfooter from './components/Footer'
  import VMain from './components/Main'
export default {
  name: 'App',
  components:{
    'vleft':Vleft,
    'vfooter':Vfooter,
    'vmain':VMain
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
::-webkit-scrollbar {/*滚动条整体样式*/
  width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
  background: #eee;
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
  /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*!*/
  border-radius: 2px;
  background: #eee;
}
</style>
