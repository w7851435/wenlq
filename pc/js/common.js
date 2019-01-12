var _hmt = _hmt || [];
$(function(){ 
	$('#regist').on('click', function(){
			layer.open({
			type: 2, //2 iframe层
			title: '欢迎注册问答库账号',
			area:['430px','380px'],
			content: 'http://ask.com/user.php?act=regist' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
		  }); 
		});
	$('#loginReturn').on('click', function(){
		layer.open({
		type: 2, //2 iframe层
		title: '登录',
		area:['430px','380px'],
		content: 'http://ask.com/user.php?act=login' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
	  }); 
	});
	$('#complain').on('click', function(){
		layer.open({
		type: 2, //2 iframe层
		title: '反馈',
		area:['430px','380px'],
		content: 'http://ask.com/index.php?act=complain' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
	  }); 
	});
	$('#search').on('click', function(){
		var search_input = $("#search_input").val();
		if(search_input==""){
		}else{
			search_input = encodeURIComponent(search_input);
			top.location='/s/'+search_input;
		}
		return false;
	});
	document.onkeydown = function(e){ 
	    var ev = document.all ? window.event : e;
	    if(ev.keyCode==13) {
	    	var search_input = $("#search_input").val();
			if(search_input==""){
			}else{
				search_input = encodeURIComponent(search_input);
				top.location='/s/'+search_input;
			}
			return false;
	     }
	}
});
function showlogin(){
	var islogined=0;
	try{
		if(localStorage.getItem("username")){             
			islogined=1;
        }
	}catch(oException){
	    console.log(oException);
	}
	if(islogined==0){
		layer.open({
			type: 2, //2 iframe层
			title: '欢迎注册问答库账号',
			area:['430px','380px'],
			content: 'http://ask.com/user.php?act=regist' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
		  }); 
	}else{
		layer.open({
			type: 2, //2 iframe层
			title: '登录问答库',
			area:['430px','380px'],
			content: 'http://ask.com/user.php?act=login' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
		  }); 
	}
	
	
}
function showvip(){
	layer.open({
		type: 2, //2 iframe层
		title: '充值VIP继续使用',
		area:['580px','380px'],
		content: ['http://ask.com/user.php?act=vippay', 'no'] //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
	  }); 
}
