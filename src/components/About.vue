<template>
  <el-container>
    <el-header>
      <div style="margin: 40px 40px 0px 40px;text-shadow: 0 0 6px rgba(0,120,255,.9);">
        <span>每个人都会累，没人能为你承担孤单和疲惫。所以总有一瞬间，我们要学会自己长大。</span>
        <el-divider content-position="right">摘抄</el-divider>
      </div>
      <div class="content"><!--text-shadow: 0 0 6px rgba(255,10,100,.9);-->
        <span><sapn style="text-shadow: 0 0 6px rgba(255,10,100,.9);">缘分</sapn>皆朝生暮死脆弱如露水。<span style="text-shadow: 0 0 6px rgba(150,52,190,.9);">来来去去</span>，并不尽如人意。唯独与<sapn style="text-shadow: 0 0 6px rgba(255,10,100,.9);">你</sapn>，像是一条<sapn style="text-shadow: 0 0 6px rgba(55,10,100,.9);">生生不息</sapn>的河流。</span>
        <el-divider></el-divider><!--text-shadow: 0 0 6px rgba(100,10,100,.9);-->
        <span style="line-height: 30px;">如果有来生，我要做一颗树，站成永恒，没有悲欢的姿势。一半在土里安详，一半在风里飞扬，
        一半洒落阴凉，一半沐浴阳光，非常沉默非常骄傲，从不依靠从不寻找。</span>
        <el-divider></el-divider>
        <span style="line-height: 30px;">如果有来生，没有人爱，我也要努力做一个可爱的人。不埋怨谁，也不羡慕谁，阳光下灿烂，风雨中奔跑，做自己的梦，走自己的路。</span>
      </div>
    </el-header>

    <el-main>
      <div style="padding: 360px 40px 0px 0px;">
        <el-timeline reverse>
          <el-timeline-item timestamp="2019/05/06" placement="top">
            <el-card>
              <h4>域名</h4>
              <p><a href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=e2dvc8ta" target="_blank">购买阿里云域名 - ikfan.cn</a></p>
            </el-card>
            <el-card>
              <h4>备案</h4>
              <p>注销之前的备案</p>
              <p>重新申请备案</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/05/07" placement="top">
            <el-card>
              <h4>阿里云服务器</h4>
              <p><a href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=e2dvc8ta" target="_blank">购买阿里云服务器</a></p>
            </el-card>
            <el-card>
              <h4>项目上线</h4>
              <p>备案成功,正式上线</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
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
  .content{
    margin: 40px 40px 0px 40px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  a {
    color: #428bca;
    text-decoration: none;
  }
</style>
