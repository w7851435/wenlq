$(function(){ 
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
function showanswer(){
	$("#view_answer").slideDown();
}
var _hmt = _hmt || [];
(function(){

    
    
    //360
    var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?34e56fd0c7c4bb161a9fcde6998cfd6c":"https://jspassport.ssl.qhimg.com/11.0.1.js?";
	document.write('<script src="' + src + '" id="sozz"><\/script>');
	
	//tongji
	var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?c5f59fbcc3ec7ac2d0b3a78ae83f2d27";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	  function t(e) {
	        var t = window.location.href,
	        n = t.split("").reverse(),
	        r = e.split(""),
	        i = [];
	        for (var s = 0,
	        o = 16; s < o; s++) i.push(r[s] + (n[s] || ""));
	        var str = i.join("");
			return str;
	    }
		 
	    var n = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.so\.com)/gi,
	    r = window.location.href;
	    if (r && !n.test(r) && window.navigator.appName) {
	        var i = "//s.360.cn/so/zz.gif",
	        o = '34e56fd0c7c4bb161a9fcde6998cfd6c',
	        u = t(o),
	        a = new Image;
	        r && (i += "?url=" + encodeURIComponent(r)),
	        o && (i += "&sid=" + o),
	        u && (i += "&token=" + u),
	        o && (a.src = i)
	    }
})();