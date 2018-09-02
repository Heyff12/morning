// 使用 Mock
var Mock = require("mockjs");
import {
  deleteCookie,
  SetCookie
} from "../src/method/cookie"
//试卷
require('./pages')


Mock.setup({
    timeout: '200-2000'
})

//基本信息
var qd_info = {
  "respcd": "0000",
  "respmsg": "OK",
  "resperr": "",
  "data": {
    "name": "@word", // 名称
    "mobile": '12345678969',
  }
};
Mock.mock(/api\/info/, "get", qd_info);
//登陆
var login_info = {
  code: "0000",
  msg: "OK",
  data: {}
};
Mock.mock(/api\/login/, "post", function () {
  SetCookie("sessionid", "yaya123344", 12);
  return login_info;
});
//登出
var logout_info = {
  code: "0000",
  msg: "OK",
  data: {}
};
Mock.mock(/api\/logout/, "post", function () {
  deleteCookie("sessionid");
  return logout_info;
});
