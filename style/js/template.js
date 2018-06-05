/**
 *  html 模板解析插件。by Fanhua
 *
 */
function parseTemplate(json,tempPath,selector){
    var temp = $.ajax({
        url: tempPath+".html",
        type: "GET",
        async:false,
        dataType: "html"});
    if(temp.readyState != 4){
        alert(tempPath +"模板获取失败");
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