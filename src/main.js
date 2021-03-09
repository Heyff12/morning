// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/' //状态管理参数
//import ElementUI from "element-ui" //饿了吗主题
import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  MessageBox,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import axios from "axios";
var SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false

import ajax_axios from "./method/ajax_axios"
Vue.prototype.$ajax_axios = ajax_axios //设置ajax请求全局变量

//引入饿了吗主题---------------------------------------------------------------------------------------------
//Vue.use(ElementUI)
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
// Vue.use(MessageBox);
Vue.use(Message);
Vue.prototype.$confirm = MessageBox.confirm;

//引入分享插件---------------------------------------------------------------------------------------------
Vue.use(SocialSharing); //分享

//本地模拟数据-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
import '../mock/global'

//路由拦截，未登录返回登录页---------------------------------------------------------------------------------------------
router.beforeEach(({
  meta,
  path
}, from, next) => {
  var {
    auth = true
  } = meta
  var isLogin = Boolean(store.state.sessionid) //true用户已登录， false用户未登录
  // console.log(auth);
  // console.log(store.state.sessionid);
  // console.log(isLogin);
  if (path == '/login') {
    store.commit('login_ify');
  } else {
    store.commit('login_ifn');
  }
  if (auth && !isLogin && path !== '/login') {
    store.commit('login_ify');
    return next({
      path: '/login'
    })
  }
  next()
});
//请求响应拦截，未登录返回登录页---------------------------------------------------------------------------------------------
axios.interceptors.response.use(data => {
  if (data.data.code == "0002") {
    router.replace({
      path: "/login"
    });
    return false;
  } else {
    return data;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
