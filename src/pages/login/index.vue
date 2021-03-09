<template>
  <div class="body_bg">
    <div class="band">
      <span>登录</span>
    </div>
    <div class="formbody">
      <el-form :model="login" :rules="login_rules" ref="login" label-width="0px" class="demo-ruleForm">
        <el-form-item label="" prop="username">
          <el-input v-model="login.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="login.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footerbg"></div>
  </div>
</template>

<script>
  import {
    test_any
  } from '../../method/yanzheng'
  export default {
    name: "login",
    components: {
    },
    data() {
      return {
        login: {
          username: "",
          password: ""
        },
        login_rules: {
          username: test_any('用户名',1,20,true, 'blur'),
          password: test_any('密码', 6, 20, true, 'blur')
        },
        login_url: "/api/users/login" //登录地址
      };
    },
    created() {},
    methods: {
      onSubmit() {
        this.$refs.login.validate(valid => {
          if (valid) {
            this.login_post();
          } else {
            return false;
          }
        });
      },
      login_post() {
        this.$ajax_axios.ajax_post(this, this.login_url, this.login, (data_return) => {
          this.$store.commit('login');
          this.$router.replace({
            path: '/'
          })
        })
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
.body_bg{
    width:100%;
    height:100%;
    .band{
        width:500px;
        height:50px;
        margin:10px auto;
        box-shadow: 0 0 10px #eeeeee;
        line-height: 50px;
        text-align: center;
        font-size:18px;
    }
    .formbody{
        width:500px;
        padding:10px;
        box-sizing: border-box;
        margin:80px auto 0;
    }
}
</style>
