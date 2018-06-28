//============================================
//		2018-06-07  By Fanhua
//		DzAdmin 1.0.9
//============================================

var header;
var title;
var con;
var link;
var nav_first;
var nav_second;
var iframe;
var iframe_refresh;
var desktop_link;

function initWindow(){
	var height = $(window).height();
	var width = $(window).width();
	
	$("#wrap").css("height",height - 50);
	$("#right").css("width",width - 230);
	$("#iframe").css({"height":height - 110});
}

$(document).ready(function(){
	initWindow();
	
	$("#header_name").text(projectName);
	$("#right").append("<div id='copyright'>"+ copyRight +"&nbsp;&nbsp;版本号："+ version +"</div>");
	document.title = projectName;

	title = $('.childTitle');
	con = $('.title > ul');
	link = $(".in-sidebar li");
	nav_first = $("#nav_first");
	nav_second = $("#nav_second");
	iframe = $("#iframe");
	iframe_refresh = $("#iframe_refresh");
	desktop_link = iframe.attr("src");
	header = $("#header");

	header.css("background",theme[themeId]);

	$("#header_user").mouseover(function(){
		$("#header_menu").show();
	});

	$("#header_user").mouseout(function(){
		$("#header_menu").hide();
	});

	$("#header_menu a").click(function(){
		var index = $(this).index();
		var url = $(this).attr("data-href");
        menuBarOnClick(index,url);
	});


	iframe_refresh.click(function(){
		refreshWindow();
	});


	title.click(function(){
		var t = $(this).find("span").eq(1).text();
		var menuItem = $(this).next();
		var arrow = $(this).children('span').eq(2);
		
		if(menuItem.css("display") == "none"){
			menuItem.slideDown();
			arrow.removeClass("arrow").addClass("arrow-up");
		}else{
			menuItem.slideUp();
			arrow.removeClass("arrow-up").addClass("arrow");
		}
		nav_first.text(t);
	});

	con.click(function(){
		return false;  // 阻止事件冒泡
	});

	link.click(function(){
		var linkText = $(this).text();
		var linkSrc = $(this).attr("data-url");
		nav_second.attr("src",linkSrc).text(linkText);
		openWindow(linkSrc);
	});

	$(window).resize(function() {
	  initWindow();
	});
});

//=======需要继承的方法========
function menuBarOnClick(index,url){
	alert("请在您的主界面中实现menuBarOnClick(index,url)方法");
}

//========菜单相关的操作=========
function openWindow(url){
	iframe.attr("src",url);
}

function refreshWindow(){
	var src = iframe.attr("src");
	openWindow(src);
}

function desktop(){
	openWindow(desktop_link);
}

function getChild(){
	return window.frames['iframe'];
}



