<template>
    <div class="pageList">
        <h2>可答题列表</h2>
        <div class="pagebody">
            <ul class="papeList">
                <li v-for="item in pages" :key=item.id @click="goTo(item.id)">
                    {{item.title}}
                    <el-button type="success">答题</el-button>
                </li>
            </ul>
        </div>
    </div>
    
</template>
<script>
export default {
  name: "pager",
  data() {
    return {
      pages: [],
      pageUrl: "/api/papers/search"
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      let postData = {
        type: "1"
      };
      this.$ajax_axios.ajax_get(this, this.pageUrl, postData, data_return => {
        this.pages = data_return.data.list;
      });
    },
    goTo(val){
        this.$router.push({
            name:"pageD", params: { id: val }
        });
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less">
@import "../../css/pagesList";
</style>
