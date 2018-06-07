//============================================
//		2018-06-07  By Fanhua
//		DzAdmin 1.0.9
//============================================

function toJSON(data){
    return JSON.parse(data);
}

//过滤
function trim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

//判断是否为空
function isEmpty(val) {
	val = trim(val);
    if (val == undefined || val == null || val == '' || val.length == 0) {
        return true;
    } else {
        return false;
    }
}

//返回上一级
function go(type){
    window.history.go(type);
}

function refresh(){
    go(0);
}

function back(){
    go(-1);
}

function forward(){
    go(1);
}