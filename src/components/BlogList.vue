<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column width="40">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
        <template slot-scope="scope">
          <div slot="reference" style="white-space:nowrap">
            <router-link :to="{path:'/blog/blogDetail',query:{uuid:scope.row.uuid,title:scope.row.title,createTime:scope.row.createTime,tag:scope.row.tag}}"><span>{{ scope.row.title}}</span></router-link>
            <div style="display: inline;margin-left: 20px;"><el-tag style="margin-right: 5px;" v-for="tag in scope.row.tag.split(',')" size="medium">{{tag}}</el-tag></div>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="创建时间"
        align="center"
        width="180">
      </el-table-column>
    </el-table>
    <vpage v-bind:page="page" @size="setSize" @current="setCurrent"></vpage>
  </div>
</template>

<style scoped>
  a {
    font-size: 15px;
    color: #4b595f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #3593f2;
  }
</style>

<script>
  import { mapState } from 'vuex';
  import Page from './Page.vue'

  export default {
    components: {
      'vpage':Page
    },
    computed:mapState({
      tag1: state => state.activeLabel,
    }),
    watch: {
      tag1 () {
        this.showData();
      }
    },
    data(){
      return{
        emptyTxt:'暂无数据',
        tableData: [],
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
        this.page.tag = this.tag1
        this.$api.get('/article/list', null, this.page,
          successRes => {
            this.tableData = successRes.data.list;
            this.page.total = successRes.data.total
          },
          failureRes =>{
            console.log(failureRes)
            this.emptyTxt = failureRes.message
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
    }
  }
</script>
