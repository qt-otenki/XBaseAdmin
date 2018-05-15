/*
 * 标签有
 * required  是否校验
 * 
 */


/**
 * 检查标签是否存在
 * @param {Object} obj
 * @param {Object} tagName
 */
function checkTag(obj,tagName){
	return (typeof(obj.attr(tagName)) != "undefined");
}

function validation(formId){
	formId = "#" + formId;
	var validObj = $(formId);
	$(formId +" input").each(function(){
		index = $(this).index();
		$(this).css({"border-color":"#FF0000"})
	});
	return false;
}