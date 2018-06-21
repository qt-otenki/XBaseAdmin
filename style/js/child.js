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
	getParent().reloadWindow();
}


function openWindow(url){
	 getParent().openWindow(url);
}

//创新当前窗口
function refreshWindow(){
	getParent().refreshWindow();
}

//返回桌面
function desktop(){
	getParent().desktop();
}

//打开加载中
function showLoading(title){
	getParent().showLoading(title);
}

//关闭加载中
function closeLoading(){
	getParent().closeLoading();
}

//界面跳转
function redirect(url){
	getParent().redirect(url);
}
