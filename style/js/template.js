//============================================
//		2018-06-07  By Fanhua
//		DzAdmin 1.0.9
//============================================

function parseTemplate(json,tempPath,selector){
    var temp = $.ajax({
        url: tempPath+".html",
        type: "GET",
        async:false,
        dataType: "html"});
    if(temp.readyState != 4){
        alert("模板获取失败,请检查！");
    }
    temp = temp.responseText;
    var html = Array();
    var cache;
    if(isArray(json)){
        for(var i = 0;i<json.length;i++){
            cache = temp;
            for (var key in json[i]){
                cache = cache.replace(new RegExp("{{"+ key +"}}",'gm'),json[i][key]);
            }
            html.push(cache);
        }
    }else{
        cache = temp;
        for (var key in json){
            cache = cache.replace(new RegExp("{{"+ key +"}}",'gm'),json[key]);
        }
        html.push(cache);
    }
    if(selector == null)
        return html.join("");
    else
        $(selector).html(html.join(""));

}