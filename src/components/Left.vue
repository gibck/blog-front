<template>
  <div class="left-container">
    <div class="left-layout-container">
      <div class="user-info">
        <img src="/../static/cat.png">
        <div class="login-name">一枚90后Java程序员</div>
        <div class="login-name">主攻后端，略懂Web前端</div>
      </div>
      <ul class="other-site">
        <a href="http://www.baidu.com" target="_blank"><li><img src="/../static/git.png"></li></a>
        <a href="http://sighttp.qq.com/authd?IDKEY=429eb7a2fc4dcb9e2b8ade4f49c0b2448fceeee1b938beba" target="_blank"><li><img src="/../static/qq.png"></li></a>
      </ul>
      <ul class="left-menu">
        <router-link tag="li" to="/blog/blogList" :class="isBlog"><span>个人笔记</span></router-link>
        <router-link tag="li" to="/main" :class="isWebNav"><span>前端导航</span></router-link>
        <router-link tag="li" to="/about" :class="isAboutMe"><span>关于我</span></router-link>
      </ul>
      <div class="qq-group">
        <img src="/../static/wx.jpg">
      </div>
      <div class="copyright">@ 2019 - 2020 IKfan</div>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      isBlog () {
        if(this.$route.path.startsWith('/blog')) return "selected-menu";
        return"";
      },
      isWebNav () {
        if(this.$route.path.startsWith('/main')) return "selected-menu";
        return"";
      },
      isAboutMe () {
        if(this.$route.path == '/about') return "selected-menu";
        return"";
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>


<style scoped>
  .left-container {
    flex: 0 0 199px 100%;
    border-right: 1px solid #eee;

  }
  .left-layout-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    /*background: #F2F6FC;*/
    min-height: 100vh;
  }
  .user-info {
    flex: 0 0 120px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .user-info img{
    width: 65px;
    flex: 0 0 70px;
    /*border-radius: 35px;*/
    /*cursor: pointer;*/
  }
  .user-info .login-name {
    margin-top: 14px;
    margin-bottom: 12px;
    font-size: 14px;
    flex: 0 0 16px;
    line-height: 16px;
    color: #333;
  }
  .other-site {
    margin-top: 20px;
    margin-bottom: 20px;
    list-style: none;
    flex: 0 0 20px;
    display: flex;
    justify-content: center;
    padding: 0px;
  }
  .other-site li {
    cursor: pointer;
  }
  .other-site li img {
    width: 35px;
    height: 35px;
    padding: 10px;
  }
  .left-menu {
    flex: 1 1 150px;
    min-height: 150px;
    display: flex;
    list-style: none;
    flex-direction: column;
    color: #666;
  }
  .left-menu li {
    width: 85px;
    height: 45px;
    line-height: 45px;
    margin: .25rem 0;
    cursor: pointer;
    font-size: .8rem;
    margin-left: 30px;
  }
  .left-menu li:hover {
    text-shadow: 0 0 6px rgba(0,120,255,.9);
  }
  .left-menu li[data-v-3c83f0b7]:active {
    text-shadow: 0 0 6px rgba(0,120,255,.9);
  }
  .left-menu li span {
    margin-left: 0px;
  }
  .selected-menu {
    //color: #fff;
    text-shadow: 0 0 6px rgba(0,120,255,.9);
  }

  .qq-group {
    flex: 0 0 100px;
    margin-top: 50px;
    margin-left: 55px;
    width: 90px;
  }
  .qq-group img{
    height: 100%;
    width: 100%;
  }
  .copyright {
    flex: 0 0 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #888;
  }

  .user-info:before{  /**根据logo外div样式名称修改before前名称**/
    content:"";
    position: absolute;
    left: -665px; /**第一个数字参数控制扫光速度，数字越大越慢**/
    top: -460px;
    width: 140px;
    height: 10px; /**光标的宽度，可根据实际调整**/
    background-color: rgba(255,255,255,.5);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: searchLights 1s ease-in 1s infinite;
    -o-animation: searchLights 1s ease-in 1s infinite;
    animation: searchLights 1.5s ease-in 1s infinite;/**第一个数字参数控制扫光速度，数字越大越慢**/
  }
  @-webkit-keyframes searchLights {
    0% { left: -100px; top: 0; }
    to { left: 120px; top: 100px; }
  }
  @-o-keyframes searchLights {
    0% { left: -100px; top: 0; }
    to { left: 120px; top: 100px; }
  }
  @-moz-keyframes searchLights {
    0% { left: -100px; top: 0; }
    to { left: 120px; top: 100px; }
  }
  @keyframes searchLights {
    0% { left: -100px; top: 0; }
    to { left: 120px; top: 100px; }
  }
</style>
