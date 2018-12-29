	
	var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?82cf154d3fe0d815847ee595230f01c1";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);

	    var bp = document.createElement('script');
	    var curProtocol = window.location.protocol.split(':')[0];
	    if (curProtocol === 'https') {
	        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
	    }
	    else {
	        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
	    }

		
		
		
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
        o = 'd55986f8cf52771f7d4100edc18b31cd',
        u = t(o),
        a = new Image;
        r && (i += "?url=" + encodeURIComponent(r)),
        o && (i += "&sid=" + o),
        u && (i += "&token=" + u),
        o && (a.src = i)
    }