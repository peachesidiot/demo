/*
 * @Author:L.Tap
 * @Description: 社会化分享
 */
;
(function($, window, document, undefined) {
    //插件初始化
    function init(target, options) {
        var settings = $.extend({}, $.fn.socialShare.defaults, options);
		//初始化各个组件
    
        $(target).append($msb_main);
        $(target).append($social_group);
        $(target).addClass("socialShare");


		//添加腾讯微博分享事件
		$(document).on("click",".msb_network_button.tQQ",function(){
			tQQ(this,settings);
		});
		//添加QQ空间分享事件
		$(document).on("click",".msb_network_button.qZone",function(){
			qZone(this,settings);
		});
		//添加新浪微博分享事件
		$(document).on("click",".msb_network_button.sina",function(){
			sinaWeibo(this,settings);
		});
		//添加豆瓣分享事件
		$(document).on("click",".msb_network_button.douban",function(){
			doubanShare(this,settings);
		});
		//添加微信分享事件
		$(document).on("click",".msb_network_button.weixin",function(){
			weixinShare(this,settings);
		});
        $(document).on("click",".msb_main",function(){
			if ($(this).hasClass("disabled")) return; 
            var e = 500;//动画时间
            var t = 0;//延迟时间
            var r = $(this).parent().find(".msb_network_button").length;  //分享组件的个数
            var i = 60;
            var s = e + (r - 1) * t;
            var o = 1;
            var a = $(this).outerWidth();
            var f = $(this).outerHeight();
            var c = $(this).parent().find(".msb_network_button:eq(0)").outerWidth();
            var h = $(this).parent().find(".msb_network_button:eq(0)").outerHeight();
            var p = ((a - c) / 2); //起始位置
            var d = ((f - h) / 2); //起始位置
            var v = 0 / 180 * Math.PI;
            if (!$(this).hasClass("active")) {
                $(this).addClass("disabled").delay(s).queue(function(e) {
                    $(this).removeClass("disabled").addClass("active");
                    e()
                });
                $(this).parent().find(".msb_network_button").each(function() {
                    var n = p + (p + i * o) * Math.cos(v);  //结束位置
                    var r = d + (d + i * o) * Math.sin(v);  //结束位置
                    $(this).css({
                        display: "block",
                        left: p + "px",
                        top: d + "px"
                    }).stop().delay(t * o).animate({
                        left: n + "px",
                        top: r + "px"
                    }, e);
                    o++
                })
            } else {
                o = r;
                $(this).addClass("disabled").delay(s).queue(function(e) {
                    $(this).removeClass("disabled").removeClass("active");
                    e()
                });
                $(this).parent().find(".msb_network_button").each(function() {
                    $(this).stop().delay(t * o).animate({
                        left: p,
                        top: d
                    }, e);
                    o--
                })
            }
		});



    }

	function replaceAPI (api,options) {
		api = api.replace('{url}', options.url);
		api = api.replace('{title}', options.title);
		api = api.replace('{content}', options.content);
		api = api.replace('{pic}', options.pic);
        api = api.replace('{pic}', options.pic);
		return api;
	}

	function tQQ(target,options){
	    var options = $.extend({}, $.fn.socialShare.defaults, options);

		window.open(replaceAPI(tqq,options));
	}

	function qZone(target,options){
		var options = $.extend({}, $.fn.socialShare.defaults, options);

		window.open(replaceAPI(qzone,options));
	}

	function sinaWeibo(target,options){
		var options = $.extend({}, $.fn.socialShare.defaults, options);

		window.open(replaceAPI(sina,options));
	}

	function doubanShare(target,options){
		window.open(replaceAPI(douban,$.extend({},$.fn.socialShare.defaults,options)));
	}

	function weixinShare(target,options){
		// window.open(replaceAPI(weixin,$.extend({},$.fn.socialShare.defaults,options)));



			layer.open({
			type: 1,
			skin: 'layui-layer-demo', //样式类名
			closeBtn: 0, //不显示关闭按钮
			anim: 2,
			area: ['300px', '350px'],
			shadeClose: true, //开启遮罩关闭
			title:'分享到微信朋友圈',
			content: '<div style="height:300px;width:280px;margin:auto"><img style="height:250px;margin: auto;display: block;" src="'+replaceAPI(weixin,$.extend({},$.fn.socialShare.defaults,options))+'"><span>打开微信,点击底部的"发现",使用"扫一扫"即可将页面分享到我的朋友圈</span></div>'
			});
	}

    $.fn.socialShare = function(options, param) {
        if(typeof options == 'string'){
		    var method = $.fn.socialShare.methods[options];
			if(method)
				return method(this,param);
		}else
			init(this,options);
    }


    //插件默认参数
    $.fn.socialShare.defaults = {
        url: window.location.href,
        title: document.title,
        content: '',
        pic: ''
    }

	//插件方法
	$.fn.socialShare.methods = {
		//初始化方法
		init:function(jq,options){
			return jq.each(function(){
				init(this,options);
			});
		},
		tQQ:function(jq,options){
			return jq.each(function(){
				tQQ(this,options);
			})
		},
		qZone:function(jq,options){
			return jq.each(function(){
				qZone(this,options);
			})
		},
		sinaWeibo:function(jq,options) {
			return jq.each(function(){
				sinaWeibo(this,options);
			});
		},
		doubanShare:function(jq,options) {
			return jq.each(function(){
				doubanShare(this,options);
			});
		},
		weixinShare:function(jq,options){
		    return jq.each(function(){
				weixinShare(this,options);
			});
	    }
	}


	//分享地址
	var qzone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&amp;title={title}&amp;pics={pic}&amp;summary={content}';
	var sina = 'http://service.weibo.com/share/share.php?url={url}&amp;title={title}&amp;pic={pic}&amp;searchPic=false';
	var tqq = 'http://share.v.t.qq.com/index.php?c=share&amp;a=index&amp;url={url}&amp;title={title}&amp;appkey=801cf76d3cfc44ada52ec13114e84a96';
	var douban = 'http://www.douban.com/share/service?href={url}&amp;name={title}&amp;text={content}&amp;image={pic}';
	var weixin = 'https://api.pwmqr.com/qrcode/create/?url={url}&amp;w=300';


})(jQuery, window, document);
