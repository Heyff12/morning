import Vue from "vue";
import Vuex from "vuex";
import {GetCookie,deleteCookie,SetCookie} from "../method/cookie"

Vue.use(Vuex);
//登录状态配置 ---sessionid--if_login  未使用
export default new Vuex.Store({
    state: {
        sessionid: GetCookie("sessionid") || "", //是否登陆
        if_login: nowurl_if(), //是否在登陆页面
        username: "" //首页名字
    },
    mutations: {
        login(state) {
            //登陆成功后 sessionid
            //SetCookie('sessionid', 'yaya123344', 12);
            state.sessionid = GetCookie("sessionid");
            //console.log(state.sessionid);
        },
        login_ify(state) {
            //当前登录页
            state.if_login = true;
        },
        login_ifn(state) {
            //当前不是登录页
            state.if_login = false;
        },
        logout(state) {
            //登陆失败后 sessionid
            //deleteCookie('sessionid');
            state.sessionid = GetCookie("sessionid");
            //console.log(state.sessionid);
        },
        s_username(state, name) {
            //渠道名称--info--name获取后，设置
            state.username = name;
        }
    }
});
//判断是否是登录页
function nowurl_if() {
    let url = window.location.href.split("/");
    let len = url.length - 1;
    if (url[len] == "login") {
        return true;
    } else {
        return false;
    }
}
