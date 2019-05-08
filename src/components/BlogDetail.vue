<template>
  <div class="blog-detail-container">
    <div class="title-container">
      <span class="title">{{this.$route.query.title}}</span>
      <ul>
        <li class="tag tag-small" v-for="tag in this.$route.query.tag.split(',')"
            style="background-color: rgb(14, 138, 22);">{{tag}}
        </li>
      </ul>
      <span class="back" @click="back">
        <i class="el-icon-back"></i>返回
      </span>
    </div>
    <div class="comment-container bga-back-top" ref="commentContainer">
      <div class="comment">
        <div class="comment-title">
          <div>
            <img src="/../static/cat.png">
            <span>ikfan</span>
          </div>
          <span class="time">{{this.$route.query.createTime}}</span>
        </div>
        <!--<article class="ql-snow ql-editor" v-html="article"/>-->
        <div class="ql-container ql-snow" style="border: 0px;">
          <div class="ql-editor" v-html="article"></div>
        </div>
      </div>
      <!--<add-comment :commentsUrl="issue.comments_url" @addCommentSuccess="handleAddCommentSuccess"/>-->
    </div>
  </div>
</template>
<script>
  import 'highlight.js/styles/xcode.css'
  import hljs from 'highlight.js'    // 语法高亮
  export default {
    data() {
      return {
        msg: '',
        article: '',
        query: {
          uuid: this.$route.query.uuid
        }
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      getContent() {
        this.$api.get('/article/content', null, this.query,
          successRes => {
            this.article = successRes.data;
          },
          failureRes => {
            console.log(failureRes)
            this.emptyTxt = failureRes.message
          }
        )
      },
    },
    created() {
      this.getContent();
    }
  }
</script>
<style scoped>
  .blog-detail-container {
    flex-grow: 1;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
  }

  .title-container {
    flex: 0 0 48px;
    display: flex;
    align-items: center;
    background-color: #f9fafc;
    padding: 0 .8rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .title-container .title {
    font-size: 22px;
    color: #4b595f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title-container ul {
    list-style: none;
    display: flex;
    flex: 1 0 auto;
    margin: 0 .5rem;
  }

  .tag {
    margin-right: 14px;
    cursor: pointer;
    user-select: none;
    border-radius: 3px;
    font-size: 14px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    color: #fff;
  }

  .tag-small {
    line-height: 24px;
    height: 24px;
    padding: 0 12px;
    font-size: 12px;
  }

  .title-container .back {
    flex: 0 0 65px;
    font-size: 14px;
    color: #4b595f;
    cursor: pointer;
  }

  .title-container .back i {
    display: inline-block;
    margin-right: 10px;
    width: 18px;
    height: 12px;
    object-fit: contain;
  }

  .comment-container {
    flex-grow: 1;
    overflow-y: auto;
    padding: 0 .8rem;
  }

  .comment {
    margin-top: 30px;
    border-radius: 4px;
    border: 1px solid #eee;
  }

  .comment-title {
    height: 48px;
    line-height: 48px;
    background-color: #f9fafc;
    border-bottom: 1px solid #eee;
    padding: 0 30px;
  }

  .comment-title div {
    cursor: pointer;
    float: left;
  }

  .comment-title div img {
    float: left;
    width: 30px;
    height: 30px;
    margin-top: 9px;
    border-radius: 15px;
    margin-right: 12px;
  }

  .comment-title div span {
    font-size: 14px;
    color: #4b595f;
  }

  .comment-title .time {
    float: right;
    margin-right: 20px;
    font-size: 12px;
    color: #849aa4;
  }
  .comment-body {
    padding: 15px;
    font-size: 14px;
  }

  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #24292e;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }
</style>

