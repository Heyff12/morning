//判断搜索项是否填写，填写则加入 请求的发送数据中 if_select是否是下拉菜单选项
let searchPost = (val, key, data, if_select) => {
    if (val.toString().length <= 0) return false;
    if (if_select) {
        data[key] = val
    } else {
        data[key] = val.replace(/\s/g, "")
    }
}

//判断修改项是否变化，变化则加入 请求的发送数据中
let mendPost = (val, key, data, originVal) => {
    if (val !== originVal) {
        data[key] = val
    }
}


exports.searchPost = searchPost
exports.mendPost = mendPost