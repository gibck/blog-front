// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import QuillEditor from 'vue-quill-editor'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import api from './request/http.js';
import Vuex from 'vuex'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/sunburst.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(QuillEditor);
Vue.use(Vuex);
Vue.prototype.$api = api
/* eslint-disable no-new */

Vue.filter("formatTime",function(value,type){
  var dataTime="";
  var data = new Date(value);
  var year   =  data.getFullYear();
  var month  =  addZero(data.getMonth() + 1);
  var day    =  addZero(data.getDate());
  var hour   =  addZero(data.getHours());
  var minute =  addZero(data.getMinutes());
  var second =  addZero(data.getSeconds());
  if(type == "YMD"){
    dataTime =  year + "-"+ month + "-" + day;
  }else if(type == "MD"){
    dataTime = month + "-" + day;
  }else if(type == "YMDHMS"){
    dataTime = year + "-"+month + "-" + day + " " +hour+ ":"+minute+":" +second;
  }else if(type == "HMS"){
    dataTime = hour+":" + minute+":" + second;
  }else if(type == "YM"){
    dataTime = year + "-" + month;

  }
  return dataTime;//将格式化后的字符串输出到前端显示
});

function addZero(val){
  if(val < 10){
    return "0" +val;
  }else{
    return val;
  }
};

const store = new Vuex.Store({
  state:{
    activeLabel:'ALL'
  },
  getters: {},
  actions: {},
  mutations: {
    setLabel(state,label){
      state.activeLabel = label;
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
