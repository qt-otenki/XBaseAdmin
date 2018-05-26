//============================================
//		2018-04-27  By Fanhua
//		DzAdmin 1.0.6
//============================================
var header;
var mTitle;
var title;
var con;
var link;
var nav_first;
var nav_second;
var iframe;
var iframe_refresh;
var tmp;
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
	$("#right").append("<div id='copyright'>"+ copyRight +"</div>");
	mTitle = null;
	title = $('.sidebar .title');
	con = $('.title > ul');
	link = $(".in-sidebar li a");
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
		refresh();
	});


	title.click(function(){
		var t = $(this).find("span").eq(1).text();
		if(mTitle == null){
			mTitle = t;
		}else{
			if(mTitle == t){
				return ;
			}
		}

		$(tmp).children('ul').slideUp().end().children('.arrow').removeClass('arrow-up');
		$(this).children('ul').slideToggle().end().children('.arrow').addClass('arrow-up');
		
		tmp = this;

		mTitle = t;
		nav_first.text(mTitle);
		nav_second.text("").attr("src","#");
	});

	con.click(function(){
		return false;  // 阻止事件冒泡
	});

	link.click(function(){
		var linkText = $(this).text();
		var linkSrc = $(this).attr("data-url");
		nav_second.attr("src","#").text(linkText);
		openWindow(linkSrc);
	});

	$(window).resize(function() {
	  initWindow();
	});
});

//=======需要继承的方法========
function menuBarOnClick(index,url){
	alert("请在您的主界面中实现MenuBarOnClick(index,url)方法");
}

//========菜单相关的操作=========
function openWindow(url){
	iframe.attr("src",url);
}

function refresh(){
	var src = iframe.attr("src");
	openWindow(src);
}

function desktop(){
	openWindow(desktop_link);
}

function getChild(){
	return window.frames['iframe'];
}



