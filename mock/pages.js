// 使用 Mock
var Mock = require("mockjs");
var Random = Mock.Random;
//试卷信息----------------------------------------------------------------------
//可答题试卷列表
var pager_list = {
  code: "0000",
  msg: "OK",
  data: {
    "list|50-80": [{
      title: Random.cword(20, 30),
      "id|+10": 123456,
    }]
  }
};
Mock.mock(
  /api\/papers\/search/,
  "get",
  pager_list
);
//试卷详情
var paper_detail = {
  code: "0000",
  msg: "OK",
  data: {
    title: Random.cword(20, 30),
    "id|+10": 123456,
    "subjects|10": [{
      title: Random.cword(20, 30),
      "id|+1": 111,
      "options|4": [{
        title: Random.cword(5, 8),
        "id|+1": 666,
      }]
    }]
  }
};
Mock.mock(/api\/papers\/details/, "get", paper_detail);
//提交试卷
var submitData = {
  code: "0000",
  msg: "OK",
  data: {}
};
Mock.mock(
  /api\/papers\/submit/,
  "post",
  submitData
);
//试卷详情--评分页面
var paperover_detail = {
  code: "0000",
  msg: "OK",
  data: {
    title: Random.cword(20, 30),
    "id|+10": 123456,
    score:90,
    "subjects|10": [{
      title: Random.cword(20, 30),
      "id|+1": 111,
      "isCorrect|1":[false,true],
      correctId:"666",
      correctTitle:"666",
      selectId:"667",
      "options": [{
        title: Random.cword(5, 8),
        id: "666"
      },{
        title: Random.cword(5, 8),
        id: "667"
      },{
        title: Random.cword(5, 8),
        id: "668"
      },{
        title: Random.cword(5, 8),
        id: "669"
      }]
    }]
  }
};
Mock.mock(/api\/papers\/submitted\/\d/, "get", paperover_detail);