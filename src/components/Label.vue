<template>
  <ul class="label-list">
    <li @click="setActiveLabel('ALL')">
      <span class="tag" v-if="activeLabel=='ALL'" style="background-color: rgb(53, 147, 242);">ALL</span>
      <span class="tag tag-unchecked" v-else>ALL</span>
    </li>
    <li @click="setActiveLabel('JAVA')">
      <span class="tag" v-if="activeLabel=='JAVA'" style="background-color: rgb(53, 147, 242);">JAVA</span>
      <span  class="tag tag-unchecked" v-else>JAVA</span>
    </li>
    <li @click="setActiveLabel('LINUX')">
      <span class="tag" v-if="activeLabel=='LINUX'" style="background-color: rgb(53, 147, 242);">LINUX</span>
      <span class="tag tag-unchecked" v-else>LINUX</span>
    </li>
    <li @click="setActiveLabel('VUE')">
      <span class="tag" v-if="activeLabel=='VUE'" style="background-color: rgb(53, 147, 242);">VUE</span>
      <span class="tag tag-unchecked" v-else>VUE</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        activeLabel: 'ALL'
      }
    },
    methods: {
      setActiveLabel (label) {
        this.activeLabel = label;
        this.$store.commit('setLabel', label)
        this.$router.push('/blog/blogList')
      }
    }
  }
</script>


<style scoped>
  .label-list {
    list-style: none;
    flex-shrink: 0;
    padding: 20px 26px 0 50px;
    display: flex;
    flex-wrap: wrap;
  }
  .label-list li {
    margin-bottom: 20px;
    margin-right: 10px;
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
  .tag-unchecked {
    background-color: #f2f5f8;
    color: #849aa4;
  }
</style>
