<template>
  <el-container style="padding:0px;">
    <el-main style="padding:0px;overflow: hidden">
      <el-carousel height="360px">
        <el-carousel-item v-for="item in 6" :key="item">
          <img style="" :src="`/../static/${item}.jpg`">
        </el-carousel-item>
      </el-carousel>
      <!--随机推荐-->
      <div class="wow fadeInUp">
        <article class="excerpt-minic-posts">
          <div class="most-comment-posts">
            <h3 class="widget_titx"><strong>随机推荐</strong></h3>
            <ul>
              <li :class="`item-${index+1}`" v-for="(item,index) in randData">
                <span :class="`label label-${index+1}`">{{index+1}}</span><span id="date">[{{item.createTime | formatTime('MD')}}]</span>
                <span class="pvr"><i class="el-icon-view"></i>  阅读（{{item.pv}}）</span>
                <!--<a href="https://www.xiaobaibk.com/xiao-bai-249.html">{{item.title}}</a>-->
                <router-link :to="{path:'/blog/blogDetail',query:{uuid:item.uuid,title:item.title,createTime:item.createTime,tag:item.tag}}">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <!--随机推荐 结束-->
      <!--文章列表-->
      <ul class="Article_list cl">
        <li v-for="article in tableData">
          <div class="Articles">
            <div class="post_left">
              <router-link :to="{path:'/blog/blogDetail',query:{uuid:article.uuid,title:article.title,createTime:article.createTime,tag:article.tag}}">
              <!--<a href="">-->
                <img class="waitpic" v-if="article.coverPic == ''" src="/../static/0.png">
                <img class="waitpic" v-else :src="article.coverPic">
                <div class="cx-cover">
                  <img src="/../static/rings.svg" alt="Cola" width="50" height="50px">
                </div>
              <!--</a>-->
              </router-link>
            </div>
            <div class="post_right">
              <h2><router-link :to="{path:'/blog/blogDetail',query:{uuid:article.uuid,title:article.title,createTime:article.createTime,tag:article.tag}}">{{article.title}}</router-link></h2>
              <p>{{article.submit}}</p>
              <div class="cat">
              <span class="sort catry">
                <a>{{article.tag}}</a>
	            </span>
              </div>
              <div class="post_meta">
                <span><i class="el-icon-alarm-clock"></i></span><span style="padding-left: 5px;">{{article.createTime}}</span>
                <span style="padding-left: 10px;"><i class="el-icon-view" aria-hidden="true"></i></span>
                <span style="padding-left: 5px;">{{article.pv}}</span>
                <span style="padding-left: 10px;"><i class="el-icon-user" aria-hidden="true"></i></span>
                <span style="padding-left: 5px;">{{article.uv}}</span>
                <span style="padding-left: 10px;"><i class="el-icon-location-information"></i></span><span style="padding-left: 5px;">杭州</span>
              </div>
            </div>
          </div>
          <div class="post-top" v-if="article.top > 0"></div>
        </li>
      </ul>
      <!--文章列表 结束-->
      <vpage v-bind:page="page" @size="setSize" @current="setCurrent" style="position: relative;top: 0px;margin: 0px;"></vpage>
    </el-main>
  </el-container>
</template>

<script>
  import Page from './Page.vue'
  export default {
    components: {
      'vpage':Page
    },
    data() {
      return {
        tableData: [],
        randData:[],
        page:{
          total:0,
          currentPage:1,
          pageSize:5,
          pageIndex:1,
          tag:'',
        },
      }
    },
    methods:{
      showData(){
        this.$api.get('/article/list', null, this.page,
          successRes => {
            this.tableData = successRes.data.list;
            this.page.total = successRes.data.total
          },
          failureRes =>{
            console.log(failureRes)
          }
        )
      },
      showRandData(){
        this.$api.get('/article/list/rand', null, null,
          successRes => {
            this.randData = successRes.data.list;
          },
          failureRes =>{
            console.log(failureRes)
          }
        )
      },
      setSize(size){
        this.page.pageSize = size;
        this.showData();
      },
      setCurrent(current){
        this.page.pageIndex = current;
        this.showData()
      },
    },
    created() {
      this.showData();
      this.showRandData();
    }
  }
</script>


<style scoped>
  .el-carousel__item {
    background: rgba(255, 255, 255, 0.15);
  }

  .el-carousel__item img {
    opacity: 0.85;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .fadeInUp {
    animation-name: fadeInUp;
    margin-top: 20px;
  }

  .excerpt-minic-posts {
    overflow: hidden;
    margin-bottom: 15px;
    padding: 0 20px;
    border: 1px solid #eaeaea;
    background-color: #fff;
  }

  .widget_titx {
    height: 25px;
    font-size: 14px;
    border-bottom: solid 1px #e6e6e6;
  }

  .most-comment-posts ul {
    margin: 0 0 10px;
    padding: 10px 0 0;
    list-style: none;
    overflow: hidden;
  }

  .most-comment-posts li {
    font-size: 12px;
    overflow: hidden;
    clear: both;
    height: 20px;
    margin-bottom: 10px;
  }

  .label {
    position: relative;
    display: inline-block;
    padding: 5px 7px 4px;
    font-size: 10.15px;
    line-height: 14px;
    color: #fff;
    vertical-align: baseline;
    white-space: nowrap;
    background-color: #999;
  }

  .most-comment-posts .label {
    margin-right: 8px;
    padding: 2px 7px;
    top: -1px;
  }

  .most-comment-posts .item-1 .label {
    background-color: #FD8C84;
  }

  .most-comment-posts .item-2 .label {
    background-color: #7FD75A;
  }

  .most-comment-posts .item-3 .label {
    background-color: #60C4FD;
  }

  #date {
    color: #999999;
    float: right;
    line-height: 1.4em;
    right: 0;
  }

  .pvr {
    float: right;
    margin-right: 15px;
    color: #999;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #428bca;
    text-decoration: none;
  }

  .most-comment-posts .item-1 a {
    color: #FD8C84;
  }

  .most-comment-posts .item-2 a {
    color: #64CA38;
  }

  .most-comment-posts .item-3 a {
    color: #52BAF5;
  }

  .most-comment-posts a {
    color: #777;
  }




  .Article_list {
    /*float: left;*/
    /*overflow: hidden;*/
    /*margin-top: 5px;*/
    /*margin-bottom: 10px;*/
    /*padding-right: 15px;*/
    /*height: auto;*/
    /*max-width: 75pc;*/
    /*padding-left: 0px;*/
    /*text-shadow: #DDD 1px 1px 2px;*/
    /*box-shadow: 0 0 5px rgba(0,0,0,.3);*/
    /*border: 1px solid #eaeaea;*/
    margin-right: 43px;
  }
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .Article_list li {
    position: relative;
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    zoom: 1;
    display: inline-block;
    width: 100%;
    border: 1px solid #eaeaea;
  }
  .Article_list li:hover {
    box-shadow: 0 0 5px rgba(0,0,0,.3);
  }
  .post_left {
    position: relative;
    float: left;
    width: 30%;
  }
  .post_left img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .cx-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background: rgba(0,0,0,.45);
    color: #fff;
    text-align: center;
    text-shadow: 1px 1px 3px #000;
    font-size: 25px;
    opacity: 0;
  }
  .cx-cover img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
    width: 50px!important;
    height: 50px!important;
    -webkit-filter: blur(0)!important;
    -moz-filter: blur(0)!important;
    -ms-filter: blur(0)!important;
    filter: blur(0)!important;
  }
  .post_left :hover img {
    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    -ms-filter: blur(1px);
    filter: blur(1px);
  }
  .post_left :hover .cx-cover {
    opacity: 1;
  }
  .post_right {
    float: right;
    padding-left: 20px;
    width: 67%;
  }

  .post_right h2 {
    margin: 0px;
    overflow: hidden;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
  }
  p {
    color: #3d464d;
    font-size: 14px;
    line-height: 1.6;
  }
  a {
    color: #48494d;
    text-decoration: none;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
  }
  .post_right .cat {
    position: absolute;
    bottom: 20px;
    z-index: 2;
    width: 50%;
    font-size: 14px;
  }
  .post_right h2 a {
    color: #000;
  }
  .post-top {
    background: url('/static/top.png');
    position: absolute;
    width: 51px;
    height: 51px;
    right: -3px;
    top: -3px;
    z-index: 9;
  }
  .post_meta {
    position: absolute;
    bottom: 20px;
    padding-left: 5pc;
    width: 60%;
    color: #949292;
    font-size: 14px;
    text-shadow: #DDD 1px 1px 2px;
  }
</style>
