<template>
    <div class="pageList">
        <h2>{{paperData.title}}</h2>
        <div class="pagebody">
          <dl class="workList" v-for="(item,index) in paperData.subjects" :key=item.id>
            <dt>{{index+1}}、{{item.title}}</dt>
            <dd>
              <!-- <el-radio v-model="workData.subjects[index]" v-for="itemSel in item.options" :label="{optionId:itemSel.id,id:item.id}" :key="itemSel.id">{{itemSel.title}}</el-radio> -->
            
              <el-radio v-model="workData[index]" v-for="itemSel in item.options" :label="itemSel.id" :key="itemSel.id">{{itemSel.title}}</el-radio>
            </dd>
          </dl>
          <div class="sub">
            <el-button type="primary" @click="postWork">提交</el-button>
          </div>
        </div>
    </div>
    
</template>
<script>
export default {
  name: "pagerD",
  data() {
    return {
      pageUrl: "/api/papers/details",
      subUrl: "/api/papers/submit",
      paperId: "",
      paperData: {
        id: "",
        title: "",
        subjects: []
      },
      workId: "",
      workData:[]
    };
  },
  created() {
    this.paperId = this.$route.params.id;
    this.getDetail();
  },
  methods: {
    getDetail() {
      let postData = {
        id: this.paperId
      };
      this.$ajax_axios.ajax_get(this, this.pageUrl, postData, data_return => {
        this.paperData = data_return.data;
        this.workId = data_return.data.id;
      });
    },
    postWork() {
      // console.log(this.workData);
      let postData = {
        id:this.workId,
        subjects:[]
      };
      this.workData.forEach((item,index) => {
        // console.log(item)
        // console.log(item,index)
        let data = {
          id:this.paperData.subjects[index].id,
          optionId:item
        };
        postData.subjects.push(data);
      });
      console.log(postData);
      this.$ajax_axios.ajax_post(
        this,
        this.subUrl,
        this.workData,
        data_return => {
          this.$confirm("将跳转至成绩查看页！", "提交成功", {
            showClose:false,
            distinguishCancelAndClose: false,
            showCancelButton: true,
            confirmButtonText: "确定",
            cancelButtonText: '取消'
          }).then(() => {
            this.$router.push({
              name: "pageoverD",
              params: { id: this.workId }
            });
          }).catch(action => {
            
          });
        }
      );
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less">
@import "../../css/pagesList";
</style>
