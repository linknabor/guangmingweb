avalon.ready(function() {
	function query(){

		var url1 = "http://www.51tbjf.com/h5.html#/middlePage";
		var picture1 = "http://img.e-shequ.com/FmpqLSkDf-MGvfqfUCa4T2R8K9jm";
		var url2 = "http://jiayanzhuangshi.com/index.php/Wap";
		var picture2 = "http://img.e-shequ.com/Fj-et2rQia5xFfueLokkI6XujM5g";

		o.banners = new Array({bannerUrl:url1, picture:picture1},{bannerUrl:url2, picture:picture2});
		initSwiper();
		
		common.invokeApi("GET","pageconfig/daojia",null,null,function(n){
			//o.banners = n.result.banners;
			o.jingxuan1=n.result.jingxuan1;
			o.jingxuan2=n.result.jingxuan2;
			o.jingxuan3=n.result.jingxuan3;
			//initSwiper();
		},function(){
			alert("页面获取信息错误，请稍后重试！");
		})
	}
    var o = avalon.define({
        $id: "root",
        banners:[],
        jingxuan1:{},
        jingxuan2:{},
        jingxuan3:{},
        gotoPage:function(url){
        	location.href=url;
        }
    });
	query();
    initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);
    initShareConfig("鲜花、汽车、健康、维修、洗衣、家政...点亮生活，尽在光明悦生活管家服务！",MasterConfig.C("basePageUrl")+"home/index.html?v=20160229",MasterConfig.C("basePageUrl")+"/static/images/share_logo1.png","足不出户即享简单便捷的居家生活");
    avalon.scan(document.body),
    common.setTitle("生活服务");
    checkFromShare();
});