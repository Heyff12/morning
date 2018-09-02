<template>
    <div class="pageList">
        <h2>{{paperData.title}}——总分:{{paperData.score}}</h2>
        <div class="pagebody">
          <dl class="workList" v-for="(item,index) in paperData.subjects" :key=item.id>
            <dt>{{index+1}}、{{item.title}}</dt>
            <dd>
                <el-radio disabled v-for="itemSel in item.options" v-model="item.selectId" :label="itemSel.id" :key="itemSel.id">{{itemSel.title}}</el-radio>
            </dd>
            <dd class="answer" v-if="!item.isCorrect">
                正确答案:{{item.correctTitle}}
            </dd>
          </dl>
          <div class="sub">
            <p class="titleShare">分享</p>
            <social-sharing url=localhost.href
                      title="答题系统"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div>
      <network network="email">
          <i class="fa fa-envelope"></i> Email
      </network>
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="line">
        <i class="fa fa-line"></i> Line
      </network>
      <network network="linkedin">
        <i class="fa fa-linkedin"></i> LinkedIn
      </network>
      <network network="odnoklassniki">
        <i class="fa fa-odnoklassniki"></i> Odnoklassniki
      </network>
      <network network="pinterest">
        <i class="fa fa-pinterest"></i> Pinterest
      </network>
      <network network="reddit">
        <i class="fa fa-reddit"></i> Reddit
      </network>
      <network network="skype">
        <i class="fa fa-skype"></i> Skype
      </network>
      <network network="sms">
        <i class="fa fa-commenting-o"></i> SMS
      </network>
      <network network="telegram">
        <i class="fa fa-telegram"></i> Telegram
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="vk">
        <i class="fa fa-vk"></i> VKontakte
      </network>
      <network network="weibo">
        <i class="fa fa-weibo"></i> Weibo
      </network> 
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
  </div>
</social-sharing>
            
          </div>
        </div>
    </div>
    
</template>
<script>
export default {
  name: "pageroverD",
  data() {
    return {
      pageUrl: "/api/papers/submitted/",
      paperId: "",
      paperData: {
        id: "",
        title: "",
        score: 0,
        subjects: []
      },
      config: {
        url: location.href,
        sites: ["qzone", "qq", "weibo", "wechat", "douban"], // 启用的站点
        disabled: ["google", "facebook", "twitter"], // 禁用的站点
        wechatQrcodeTitle: "微信扫一扫：分享" // 微信二维码提示文字
      }
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
      this.$ajax_axios.ajax_get(
        this,
        this.pageUrl + this.paperId,
        "",
        data_return => {
          this.paperData = data_return.data;
        }
      );
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less">
@import "../../css/pagesList";
</style>
