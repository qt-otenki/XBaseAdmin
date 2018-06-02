# dzadmin
>一款轻量级的，快速搭建后台管理平台的前端框架。使用XBaseAdmin可以快速搭建后台界面，快速渲染表格数据，基本的系统函数及弹出动画。

## 四大功能
>表格渲染、后台搭建、系统方法、登录模块、表单校验、数据绑定

## 最新版本
版本号：1.0.8

### 1.快速搭建后台界面
>	首先我给大家看一看搭建后的图。
![搭建的后台首页](http://upload-images.jianshu.io/upload_images/5065466-6103b7dca0be19c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 2.表格渲染的使用方法
#### 第一步 导入css 和 js
```
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/table.css" />
<script src="js/jquery-3.2.1.min.js"></script>
```
#### 第二步 加入table代码
```
<div id="table">
		  <div id="table_toolbar">
			<!-- http://www.runoob.com/try/demo_source/bootstrap3-glyph-icons.htm   菜单图标定义 -->
			<button type="button" class="btn btn-default btn-sm" id="table_delete_btn">
				<span class="glyphicon glyphicon-trash"></span> 导出数据
			</button>

			<button type="button" class="btn btn-default btn-sm" id="table_mod_btn">
				<span class="glyphicon glyphicon-pencil"></span> 编辑案列
			</button>
		  </div>
		  <table 
		  	id="table_data"
		    data-url="data.json" 
		    data-extra-param="" 
		    data-toolbar-onclick="true" 
		    auto-refresh-table="true" 
		    refresh-table-interval="20" 
		    show-pagination="true"
		    pagination-limit="15"
		    >  
			  <tr id="table_header"> 
				<th data-name="checkbox">操作</th>
				<th data-name="id">ID</th>  
				<th data-name="name">名称</th>  
				<th data-name="price">价格</th>
				<th data-name="image" data-function="imageController">图片</th>
			  </tr>  
		</table>  
		<div id="table_loading">正在加载数据..</div>
		<div id="pager"></div>
	</div>
```

#### 第三步
> 在界面最底部body上导入表格插件js
```
<script src="js/table.js"></script>
```

#### 第四步
> 实现工具栏点击事件，data-function对应响应函数
```
//复写toolBarOnClick方法 获得点击事件
function toolBarOnClick(index){
	alert("执行了点击方法");
}

//渲染图片显示的方法
function imageController(value){
	return "<img src='"+ value +"' />";
}
```

### API文档
#### table属性
| 表格属性 | 演示 | 备注 |
|------|------|---------|
|data-url|data.php| 请求数据的地址，不支持跨域 |
|data-extra-param| name=aaa&age=20|扩展参数，会自动拼接到url后面|
|data-toolbar-onclick|true | 是否需要自动注册工具栏点击事件，默认不注册|
|auto-refresh-table|true/false|是否需要自动刷新，默认不自动刷新|
|refresh-table-interval|10|自动刷新周期、auto-refresh-table为true生效|
|show-pagination|true/flase|是否显示分页条|
|pagination-limit|10|每页数据条数|
#### table字段属性
| 字段属性 | 演示 | 备注 |
|----|-----|-------|
|data-name|name|字段名，请对应数据库（接口返回数据）字段名|
|data-function|functionFoater|使用函数返回字段的值，非必须，支持html|

#### 接口请求如下所示
1.接口返回数据规范
```
{"total":100,"rows":[
{"id":1,"name":"董志平","price":"120.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"},
{"id":2,"name":"繁华","price":"190.00","image":"https://www.baidu.com/img/baidu_jgylogo3.gif"}
]}
```

2.table发出请求参数格式
```
http://127.0.0.1:8020/DzAdmin/data.json?limit=15&page=1&offset=0&random=0.8821554652295365&aaa=2&bbb=4&vvv=444
```


## table.js
updateTable();//刷新数据
getSelectedRows();
getSelectedRow();

### 3.更新详情
+ 2017.09.21 更新多皮肤切换。美化分页条
+ 2017.10.18 表格使用
+ 2017.12.24 新增右侧菜单事件。继承方法即可实现单机事件
+ 2018.01.13 更换左边菜单栏皮肤，支持按T切换皮肤。
+ 2018.02.27 DzTable加入自动刷新功能。
+ 2018.05.26 XBaseAdmin初始化开发。
+ 2018.06.01 XbaseAdmin完善外菜单栏。
+ 预计加入头像

### 4.作者邮箱
> 90fanhua@gmail.com
