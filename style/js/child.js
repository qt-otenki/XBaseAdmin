//============================================
//		2018-06-07  By Fanhua
//		DzAdmin 1.0.9
//============================================

function getTop(){
	return window.top;	
}

function getParent(){
	return window.parent;
}

function reloadWindow(){
	getTop().reloadWindow();
}


function openWindow(url){
	 getTop().openWindow(url);
}

//创新当前窗口
function refreshWindow(){
	getTop().refreshWindow();
}

//返回桌面
function desktop(){
	getTop().desktop();
}

//打开加载中
function showLoading(title){
	getTop().showLoading(title);
}

//关闭加载中
function closeLoading(){
	getParent().closeLoading();
}

//界面跳转
function redirect(url){
	getTop().redirect(url);
}
