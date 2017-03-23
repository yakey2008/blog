<!-- IF __is_mobile -->
<script type="text/javascript">
window.addEventListener('load', function (){
	window.TongJi.addPv('/移动商城/卖家中心/商品管理');
	window.TongJi.bindClick();
}, false);
seajs.use(['dialog', 'tips', 'loading'], function (Dialog, Tips, Loading) {
	$(function(){

		var oTips = new Tips(),
			oLoading = new Loading();

		// 批量操作脚本
		// zougc
		// 批量操作按钮
		var goodslink = $(".j-goodslistlink").attr("href");
		$(".j-batch-edit").on('click', function(){
			$(".pc-rightarrow").hide();
			$(".goods-view01").hide();
			$(".j-batch-goods").show();
			$(".goods-select-box").show();
			$(".j-goodslistlink").attr("href","javascript:void(0)");
			$(".j-good").attr("goodsbatch","change");
			$(".c-btm-item .ui-btn-h54 span").removeClass('selected-all');

		});
		$(".j-batch-back").on('click', function(){
			// location.reload();
			$(".pc-rightarrow").show();
			$(".goods-view01").show();
			$(".j-batch-goods").hide();
			$(".goods-select-box").hide();
			$(".j-goodslistlink").each(function () {
				$(this).attr('href', $(this).attr('data-href') );
			});
			$(".j-good").attr("goodsbatch","");
		});
		//点击单个商品
		$("body").on("click",".j-good",function(){
			$(this).find(".goods-mutiselect").toggleClass("goods-mutiselected");
			//检测是否需要全选
			if( $('#menu-store').find('.j-good').length === $('#menu-store').find('.j-good .goods-mutiselected').length ){
				$(".c-btm-item .ui-btn-h54 span").addClass('selected-all');
			}else{
				$(".c-btm-item .ui-btn-h54 span").removeClass('selected-all');
			}
		});
		//点击全选按钮
		$(".j-batch-goods .j-selAll").on('click', function(){
			var oBtn = $(this).find('.selected-all-bg');
			oBtn.toggleClass("selected-all");
			if( oBtn.hasClass("selected-all") ){
				$(".goods-mutiselect").each(function(){
					$(this).addClass("goods-mutiselected");
				});
			}else{
				$(".goods-mutiselect").each(function(){
					$(this).removeClass("goods-mutiselected");
				});
			}
			
		});
		// 改变上下架状态
		$(".j-sort li").on('click', function(){
			$(".goods-view01").show();
			$(".j-batch-goods").hide();
			if($(this).hasClass("j-closesell")){
				$(".j-batch-submit").attr('but_action','open');
				$(".j-batch-submit").html("上架");
			}else{
				$(".j-batch-submit").attr('but_action','close');
				$(".j-batch-submit").html("下架");
			}
		});

		//处理上下架，删除商品后，不够数据时，向后台请求数据
		function handleLoadData () {
			// $(".pc-rightarrow").show();
			// $(".goods-view01").show();
			// $(".j-batch-goods").hide();
			// $(".goods-select-box").hide();
			window.iPage = 1;
			window.CHECK_LOAD_DATA();			
			$(".pc-delone").find(".j-delGood").css('display', 'none').removeClass('pc-delgood');	
		}


		// 提交数据操作
		var oDialogUp = new Dialog(),
			oDialogDown = new Dialog();
		var upDownData = null,
			upDownType = '';

		oDialogUp.init({
			title: '确认上架?'
		});
		$(oDialogUp).on('afterConfirm', function () {
			fnUpDown();
		});
		
		oDialogDown.init({
			title: '确认下架?'
		});
		$(oDialogDown).on('afterConfirm', function () {
			fnUpDown();
		});
		//上下架商品
		function fnUpDown(){
			oLoading.show();
			$.ajax({
				url:'/goods/LotSize.html',
				dataType:'json',
				async: false,
				data:{
				'goods_id_group':upDownData,
				'type':upDownType
				}
			})
			.done(function(response) {
				if( response.success === true ){
					if( response.code === 1 ){
						if($(".j-batch-submit").html() === '上架'){							
							//加统计点
							window.TongJi.addPv('/移动商城/卖家中心/商品管理/批量操作/上架');
						}else{
							//加统计点
							window.TongJi.addPv('/移动商城/卖家中心/商品管理/批量操作/下架');
						}



						upDownData = response.list;
						var openclosetip = $(".j-batch-submit").html();
						oTips.init(response.tips);		
						// location.reload();
						$('#menu-store .goods-mutiselected').parents('.j-good').parents('a').remove();
						handleLoadData();//检查是否要加载数据
					}else{
						console.log( response.tips );
						oTips.init(response.tips);
					}
				}else{
					console.log( response );
					oTips.init(response);
				}
			})
			.always(function () {
				oLoading.hide();
			});	
		}
		$(".j-batch-submit").on('click', function(){
			var aData = fnGetSelectedData();
			
			if(aData.length == 0){
				oTips.init("请选择商品！");
				return false;
			}
			
			if($(this).attr('but_action') == 'open'){
				type = 'open';
			}else{

				type = 'close';
			}

			if( $(".j-batch-submit").html() === '上架' ){
				oDialogUp.resetText({
					content: aData.length +　'件商品将上架'
				});
				oDialogUp.show();
			}else{
				oDialogDown.resetText({
					content: aData.length +　'件商品将下架，下架后买家将无法浏览到您的商品'
				});
				oDialogDown.show();
			}


			upDownData = aData;
			upDownType = type
			
		});
		//获取选中数据
		function fnGetSelectedData(){
			var selectedgoods =[];
			$(".goods-mutiselected").each(function(){
				var temp = $(this).parents(".j-good").data("id");
				selectedgoods.push(temp);
				
			});
			return selectedgoods;
		}
		// 批量删除脚本
		// zougc
		//提交请求
		//
		var oDialogDelete = new Dialog();
		var oDeleteData = null;

		oDialogDelete.init({
			title: '删除商品?'
		});
		$(oDialogDelete).on('afterConfirm', function () {
			oLoading.show();
			$.ajax({
				url:'/goods/LotDeleteGoods.html',
				dataType:'json',
				async: false,
				data:{
				'goods_id_group':oDeleteData
				}
			})
			.done(function(response) {
				if( response.success === true ){
					if( response.code === 1 ){
						//加统计点
						window.TongJi.addPv('/移动商城/卖家中心/商品管理/批量操作/删除');

						aData = response.list;
						var openclosetip = $(".j-batch-del").html();
						oTips.init(response.tips);		
						// location.reload();
						$('#menu-store .goods-mutiselected').parents('.j-good').parents('a').remove();
						handleLoadData();//检查是否要加载数据
					}else{
						console.log( response.tips );
						oTips.init(response.tips);
					}
				}else{
					console.log( response.tips );
					oTips.init(response.tips);
				}
			})
			.always(function () {
				oLoading.hide();
			});
		});
		$(".j-batch-del").on('click', function(){
			var aData = fnGetSelectedData();			
			if(aData.length == 0){
				oTips.init("请选择商品！");
				return false;
			}
			oDialogDelete.resetText({
				content: aData.length + '件商品将会删除，删除后将无法恢复'
			});
			oDeleteData = aData;
			oDialogDelete.show();				
		});
	});
});
</script>
<!-- ELSE -->
<script type="text/javascript">

seajs.use(['dialog', 'tips', 'loading'], function (Dialog, Tips, Loading) {

	var oTips = new Tips(),
		goods_id_group = [],
		oLoading = new Loading(),
		goodshref = '';

	//商品预览
	$(function(){

		// 批量操作按钮
		var goodslink = $(".j-goodslistlink").attr("href");
		$(".j-batch-edit").on('click', function(){
			$(".pc-rightarrow").hide();
			$(".goods-view01").hide();
			$(".j-batch-goods").show();
			$(".goods-select-box").show();
			$(".j-goodslistlink").attr("href","javascript:void(0)");
			$(".j-goodslistlink").removeAttr("target");
			// $(".j-goodslistlink").removeClass("j-goodslistlink");			
			$(".j-good").attr("goodsbatch","change");
			$(".pc-delone").find(".j-delGood").css('display', 'none').removeClass('pc-delgood');
			$(".c-btm-item .ui-btn-h54 span").removeClass('selected-all');
		});

		$(".j-batch-back").on('click', function(){
			// location.reload();
			$(".pc-rightarrow").show();
			$(".goods-view01").show();
			$(".j-batch-goods").hide();
			$(".goods-select-box").hide();
			$(".j-goodslistlink").attr("href", $(this).attr('data-href'));

			$(".j-goodslistlink").each(function () {
				$(this).attr('href', $(this).attr('data-href') );
			})

			// $(".j-goodslistlink").removeAttr("target");
			$(".j-good").removeAttr("goodsbatch");
			$(".pc-delone").find(".j-delGood").addClass('pc-delgood');


			$(".c-btm-item .ui-btn-h54 span").removeClass('selected-all');
			$(".goods-selected-box").removeClass('goods-selected-box');
		});

		//点击单个商品
		$("body").on("click",".goods-select-box",function(){
			$(this).toggleClass("goods-selected-box");
			//检测是否需要全选
			if( $('#menu-store').find('.j-good').length === $('#menu-store').find('.j-good .goods-selected-box').length ){
				$(".c-btm-item .ui-btn-h54 span").addClass('selected-all');
			}else{
				$(".c-btm-item .ui-btn-h54 span").removeClass('selected-all');
			}
		});

		//点击全选按钮 	
		$(".j-batch-goods .j-selAll").on('click', function(){
			var oBtn = $(this).find('.selected-all-bg');
			oBtn.toggleClass("selected-all");
			if( oBtn.hasClass("selected-all") ){
				$(".goods-select-box").each(function(){
					$(this).addClass("goods-selected-box");
				});
			}else{
				$(".goods-select-box").each(function(){
					$(this).removeClass("goods-selected-box");
				});
			}
			
		});
		// 改变上下架状态
		$(".j-sort li").on('click', function(){
			$(".goods-view01").show();
			$(".j-batch-goods").hide();
			if($(this).hasClass("j-closesell")){
				$(".j-batch-submit").attr('but_action','open');
				$(".j-batch-submit").html("上架");
			}else{
				$(".j-batch-submit").attr('but_action','close');
				$(".j-batch-submit").html("下架");
			}
		});

		//处理上下架，删除商品后，不够数据时，向后台请求数据
		function handleLoadData () {
			// $(".pc-rightarrow").show();
			// $(".goods-view01").show();
			// $(".j-batch-goods").hide();
			// $(".goods-select-box").hide();
			window.iPage = 1;
			window.CHECK_LOAD_DATA();			
			$(".pc-delone").find(".j-delGood").css('display', 'none').removeClass('pc-delgood');	
		}

		var oDialogUp = new Dialog(),
			oDialogDown = new Dialog();
		var upDownData = null,
			upDownType = '';

		//上架确认框
		oDialogUp.init({
			title: '确认上架?'
		});
		$(oDialogUp).on('afterConfirm', function () {
			fnUpDown();
		});

		//下架确认框
		oDialogDown.init({
			title: '确认下架?'
		});
		$(oDialogDown).on('afterConfirm', function () {
			fnUpDown();
		});
		//上下架商品
		function fnUpDown(){
			oLoading.show();

			$.ajax({
				url:'/goods/LotSize.html',
				dataType:'json',
				async: false,
				data:{
				'goods_id_group':upDownData,
				'type':upDownType
				}
			})
			.done(function(response) {
				if( response.success === true ){
					if( response.code === 1 ){
						aData = response.list;
						var openclosetip = $(".j-batch-submit").html();
						oTips.init(response.tips);	
						// location.reload();
						$('#menu-store .goods-selected-box').parents('.j-good').parents('a').remove();

						handleLoadData();//检查是否要加载数据
					}else{
						console.log( response.tips );
						oTips.init(response.tips);
					}
				}else{
					console.log( response.tips );
					oTips.init(response.tips);
				}
			})
			.always(function () {
				oLoading.hide();

					
			});				
		}

		// 提交数据操作
		$(".j-batch-submit").on('click', function(){
			var aData = fnGetSelectedData();
			console.log(aData);
			
			if(aData.length == 0){
				oTips.init("请选择商品！");
				return false;
			}
			
			if($(this).attr('but_action') == 'open'){
				type = 'open';
			}else{

				type = 'close';
			}


			if( $(".j-batch-submit").html() === '上架' ){
				oDialogUp.resetText({
					content: aData.length +　'件商品将上架'
				});
				oDialogUp.show();
			}else{
				oDialogDown.resetText({
					content: aData.length +　'件商品将下架，下架后买家将无法浏览到您的商品'
				});
				oDialogDown.show();
			}

			upDownData = aData;
			upDownType = type
			
		});
		//获取选中数据
		function fnGetSelectedData(){
			var selectedgoods =[]; 
			$(".goods-selected-box").each(function(){
				var temp = $(this).parents(".j-good").data("id");
				selectedgoods.push(temp);
			});
			console.log(selectedgoods);
			return selectedgoods;
		};
		//删除选中数据dom
		// function DeleteDomById(array){
		// 	var temp =array; 
		// 	for(var i=0; i<array.length; i++) {
				
		// 	}
		// 	$(".goods-selected-box").each(function(){
		// 		var temp = $(this).parents(".j-good").data("id");
		// 		selectedgoods.push(temp);
		// 	});
		// 	return selectedgoods;
		// };

		// 批量删除脚本
		// zougc
		//提交请求
		var oDialogDelete = new Dialog();
		var oDeleteData = null;

		//批量删除确认框
		oDialogDelete.init({
			title: '删除商品?'
		});
		$(oDialogDelete).on('afterConfirm', function () {
			oLoading.show();
			$.ajax({
				url:'/goods/LotDeleteGoods.html',
				dataType:'json',
				async: false,
				data:{
				'goods_id_group':oDeleteData
				}
			})
			.done(function(response) {
				if( response.success === true ){
					if( response.code === 1 ){
						aData = response.list;
						var openclosetip = $(".j-batch-del").html();
						oTips.init(response.tips);		
						// location.reload();
						$('#menu-store .goods-selected-box').parents('.j-good').parents('a').remove();

						handleLoadData();//检查是否要加载数据
					}else{
						console.log( response.tips );
						oTips.init(response.tips);
					}
				}else{
					console.log( response.tips );
					oTips.init(response.tips);
				}
			})
			.always(function () {
				oLoading.hide();
			});				
		});
		$(".j-batch-del").on('click', function(){
			var aData = fnGetSelectedData();
			
			if(aData.length == 0){
				oTips.init("请选择商品！");
				return false;
			}


			oDeleteData = aData;
			oDialogDelete.resetText({
				content: aData.length + '件商品将会删除，删除后将无法恢复'
			});
			oDialogDelete.show();
			
		});

		//pc单个删除
		//单个删除确认框
		var oDialogDelete2 = new Dialog();
		oDialogDelete2.init();
		$(oDialogDelete2).on('afterConfirm', function () {
			oDialogDelete2.$todel.addClass("todel");

			$.ajax({
				url:'/goods/LotDeleteGoods.html',
				dataType:'json',
				async: false,
				data:{
				 'goods_id_group':goods_id_group,
				}
			})
			.done(function(response) {
				if( response.success === true ){
					if( response.code === 1 ){
						oTips.init(response.tips);
						oDialogDelete2.$todel.parents('a').remove();
					}else{
						console.log( response.tips );
						oTips.init(response.tips);
						oDialogDelete2.$todel.removeClass("todel");
					}
				}else{
					console.log( response.tips );
					oTips.init(response.tips);
					$(".u-tips").fadeOut(1500);
					$(this).removeClass("todel");
				}
			});
		});
		$("body").on('click',".pc-delgood", function(){
			var goodoneid = $(this).parents(".j-good").data("id");
			oDialogDelete2.$todel = $(this);
			goods_id_group = [goodoneid];
			oDialogDelete2.resetText({
				content:'商品将会删除，删除后将无法恢复'
			});
			oDialogDelete2.show();
		});
	});
	//pc单个商品删除
	$("body").on("mouseover",".pc-delone",function(){
		$(this).find(".pc-delgood").show();
	});
	$("body").on("mouseout",".pc-delone",function(){
		$(this).find(".pc-delgood").hide();
	});
	$("body").on("mouseover",".pc-delgood",function(){
		goodshref = $(this).parents(".j-goodslistlink").attr("href");
		$(this).parents(".j-goodslistlink").attr("href","javascript:void(0)");
	});
	$("body").on("mouseout",".pc-delgood",function(){
		$(this).parents(".j-goodslistlink").attr("href",goodshref);
	});

});
</script>	
<!-- ENDIF -->	
