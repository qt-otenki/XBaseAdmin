/*
 * 标签有
 * required  是否校验
 * 
 * 
 * 
 * 设置校验信息回调方式
 * 1.alert反馈
 * 2.自定义函数反馈
 * 3.dialog反馈
 */


/**
 * 检查标签是否存在
 * @param {Object} obj
 * @param {Object} tagName
 */
function checkTag(obj,tagName){
	return (typeof(obj.attr(tagName)) != "undefined");
}

/**
 * 获取某个控件的标签值
 * @param {Object} obj
 * @param {Object} tagName
 */
function getTagValue(obj,tagName){
	return obj.attr(tagName);
}

/**
 * 获取某个控件的输入值
 * @param {Object} obj
 */
function getInputValue(obj){
	return obj.val();
}

function validation(formId){
	formId = "#" + formId;
	var validObj = $(formId);
	var status = true;
	$(formId +" input").each(function(){
		if(!checkTag($(this),"isPass")){
			var inputType = getTagValue($(this),"type");
			var inputValue = getInputValue($(this));
			if(inputValue.length <= 0){
				$(this).focus();
				status = false;
				return false;
			}
			
		}
	});
	return status;
}