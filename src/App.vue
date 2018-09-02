<template>
  <div id="app">
    <div class="manage_body" :class="{hide:login}">
      <div class="menuD">
        <h2 class="title">答题系统</h2>
        <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>  
            <span>可答</span>
          </el-menu-item>
          <el-menu-item index="/pageover">
            <i class="el-icon-menu"></i>
            <span slot="title">已答</span>
          </el-menu-item>
        </el-menu>

      </div>
      <div class="bodybank" :class="{'safariTable':ifSafari}">
        <div class="right_body">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ifSafari: false //苹果浏览器，清楚th.gutter
    };
  },
  watch: {},
  computed: {
    login: function() {
      return this.$store.state.if_login;
    }
  },
  created: function() {
    if (
      !/Chrome/g.test(navigator.userAgent) &&
      /Safari/g.test(navigator.userAgent)
    ) {
      this.ifSafari = true;
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
@import "./css/common/const";
body,
p,
ul,
ol,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
input,
select,
textarea,
button,
th,
td {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

ul,
dl,
ol {
  list-style: none;
}

img,
fieldset,
input[type="submit"] {
  border: 0 none;
}

img {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button,
input[type="button"] {
  cursor: pointer;
  border: 0 none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}

textarea {
  word-wrap: break-word;
  resize: none;
}

/* word-wrap for opera, resize for webkit */

menu {
  margin: 0;
  padding: 0;
}

input[type="number"] {
  -webkit-user-select: text;
}

a,
button,
input,
img {
  -webkit-touch-callout: none;
}

/* 1.ios 长按时不触发系统的菜单 2.禁止长按时下载图片 */

input,
select,
textarea {
  outline: none;
}

a,
button,
input,
textarea,
span {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}

a,
a:link,
a:visited,
a:hover {
  text-decoration: none;
  color: @black;
  cursor: pointer;
}

@media all and (-webkit-transform-3d) {
  /* android4.0+ ios4+ 恢复按钮被点击时产生的效果 */
  a,
  button,
  input,
  textarea,
  span {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

textarea {
  /* 消除ios内阴影 */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

a {
  text-decoration: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  background-color: white;
  background-image: none;
  color: #000000;
}

section,
div,
dl,
dt,
dd,
footer {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* ==================共用============================================================ */

.t_c {
  text-align: center;
}

.t_r {
  text-align: right;
}

.mar_t20 {
  margin-top: 20px;
}

.mar_r6 {
  margin-right: 6px;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix:after {
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}



.border_red {
  color: @red;
}

i.i_normal {
  font-style: normal;
}

a.orange,
a.orange:link,
a.orange:visited,
a.orange:hover {
  text-decoration: none;
  color: @orange;
  cursor: pointer;
}

body {
  width: 100%;
  -webkit-text-size-adjust: none;
  /* 增加该属性，可以增加弹性 */
  -webkit-overflow-scrolling: touch;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  .manage_body {
    width: 100%;
    position: relative;
    padding-left: 200px;
    height: 100%;
    .menuD {
      width: 200px;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #545c64;
      h2.title{
        width:100%;
        height: 65px;
        line-height: 65px;
        text-align: center;
        color:white;
        font-size: 20px;
      }
      .el-menu{
        border-right:0;
      }
    }
    .bodybank {
      width:100%;
      .right_body{
        width:100%;
      }
      
      &.safariTable {
        .right_body .el-table th.gutter {
          display: none;
        }
      }
    }
    &.hide {
      padding: 0;
      .menuD {
        display: none;
      }
    }
  }
}
</style>
