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

/**
 * 正则判断
 * @param {Object} val
 * @param {Object} val
 */
function test(val,regex){
	var pattern = new RegExp(regex,'gi');
	return pattern.test(val);
}


/**
 * 判断某个值是否为空
 * @param {Object} val
 */
function stringEmpty(val){
	if(val == undefined || val == null || val == '' || val.length == 0){
		return true;
	}else{
		return false;
	}
}

/**
 * 核心代码
 * @param {Object} obj
 * @param {Object} callback
 */
function checkForm(obj,callback){
	if(checkTag(obj,"pass")){
		return true;
	}
	
	var inputType = getTagValue(obj,"type").toLowerCase();
	var inputValue = getInputValue(obj);
	var showMessage = getTagValue(obj,"message");
	if(inputType == "text"){
		if(stringEmpty(inputValue)){
			callback(obj,showMessage);
			obj.focus();
			return false;
		}
		
		if(checkTag(obj,"regex")){
			var regexValue = getTagValue(obj,"regex");
			if(!test(inputValue,regexValue)){
				callback(obj,showMessage);
				obj.focus();
				return false;
			}
		}
	}
}

/**
 * 校验入口
 * @param {Object} formId
 * @param {Object} callback
 */
function validation(formId,callback){
	formId = "#" + formId;
	var validObj = $(formId);
	var status = true;
	$(formId +" input").each(function(){
		status = checkForm($(this),callback);
		return status;
	});
	return status;
}