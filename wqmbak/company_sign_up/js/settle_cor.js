/**
 * 企业注册流程
 * Author: TK 阿初
 * Date: 2015.04.24
 * Email: slimeball@foxmail.com
 */
define(function(require) {
	var ImgCompress = require('imgcompress');
	var oImgCompress = new ImgCompress();
	var upload_g_size = $("#upload_g_size").val();
	var imgId;
	var businessLicense,
		identityBack,
		identityFront,
		identityHold,
		checkGoods,
		brandLicense,
		checkGoodsTen=[],
		telephone,
		checkGoodsImg,
		checkGoodsImgNum,
		supplierId = '',
		imgUrlId = ''
		__up_url_path = $("#__up_url_path").val(),
		Tips = require('tips'),
		oVerify = require('verify');
	var oTips = new Tips();

//已有账户开店
$("#kaidian").on('click',function(){
	localStorage.setItem('type','KD');
	var ktype = localStorage.getItem('type');
	window.location.href = '/KaiDian/kaidian.html?type='+ktype;
})
$("#seller_center").on('click',function(){
	localStorage.setItem('type','SC');
	var ktype = localStorage.getItem('type');
	window.location.href = '/KaiDian/kaidian.html?type='+ktype;
})
$(".hasstore").on('click',function(){
	localStorage.setItem('type','OS');
	var ktype = localStorage.getItem('type');
	window.location.href = '/KaiDian/kaidian.html?type='+ktype;
})
$("#j_has_store_next").on('click',function(){
	if(hex_sha1($("#j_mescode").val()) == localStorage.getItem('messageCode')){
		$(".status").find('img').attr('src','/images/sic/code_ok.png');
		$(".status").show();
		window.location.href = '/KaiDian/SignUpSelect.html';
	}else{
		$(".status").find('img').attr('src','/images/sic/code_not.png');
		$(".status").show();
		return false;
	}
})
$('#j_go_open_store').on('click',function(){
	$.ajax({
		url:'/SettleIn/sendMessage.html',
		type:'POST',
		dataType:'json',
		data:{
			'type':'sendMessage',
			'kind': 'company_nostore',
			'tel':$("input[name='u_name']").val(),
		}
	})
	.done(function (response){
		console.log(response);
		window.location.href = '/KaiDian/SignUpHasStoreCode.html';

		localStorage.setItem('messageCode',response.messageCode);
	});
});

//发送验证码
	$('#j_getcode').on('click',function(){
		$.ajax({
			url:'/SettleIn/sendMessage.html',
			type:'POST',
			dataType:'json',
			data:{
				'type':'sendMessage',
				'kind': 'company',
				'tel':$("input[name='telephone']").val(),
			}
		})
		.done(function (response){
			console.log(response);
			localStorage.setItem('telnum',response.tel);
			if($("#telephone").val() == ''){
				oTips.init("请输入手机号");
			}else if(response.code == -9) {
				oTips.init(response.msg );
				return false;
			}else if(response.code == -3){
				oTips.init("请输入正确手机号");
			}else if(response.code == -10){
				oTips.init('该用户已注册，开店请点击"已有账号开店"按钮');
			}else{
				window.location.href="/KaiDian/SignUpCode.html";
			};
			localStorage.setItem('messageCode',response.messageCode);
		});
	});
	telephone = localStorage.getItem("telnum");
	$("#u_name").attr("value",telephone);
//验证验证码
	$('#j_mescode').keyup(function(){
		if($(this).val().length === 6){
			if(hex_sha1($("#j_mescode").val()) == localStorage.getItem('messageCode')){
				$("#j_paswrd").prop("disabled","");
				$("#j_cfm_paswrd").prop("disabled","");
				$("#j_paswrd").css("background-color","#847242");
				$("#j_cfm_paswrd").css("background-color","#847242");
				$(".status").find('img').attr('src','/images/sic/code_ok.png');
				$(".status").show();
				$(".j_codetip").hide();
			}else{
				console.log('验证失败')
				$(".j_codetip").show();
				$(".j_codetip b").text('输入的验证码错误');
				$(".status").find('img').attr('src','/images/sic/code_not.png');
				$(".status").show();
			}
		}else{
			$("#j_paswrd").prop("disabled","disabled");
			$("#j_cfm_paswrd").prop("disabled","disabled");
			$("#j_paswrd").css("background-color","#a18950");
			$("#j_cfm_paswrd").css("background-color","#a18950");
		}
	});
//重新获取验证码
waitSitySec();
$(".regetcode").on("click",function(){
	$.ajax({
		url:'/SettleIn/sendMessage.html',
		type:'POST',
		dataType:'json',
		data:{
		'type':'sendMessage',
		'tel':$("input[name='u_name']").val(),
		}
	})
	.done(function (response){
		localStorage.setItem('messageCode',response.messageCode);
	});
	waitSitySec();
});

function waitSitySec(){
//60秒重新获取验证码
	var time = 60,
		str = 's后重新获取',
		codeinfo = $('.regetcode'),
		timer = null;

	if (timer !== null) {return false;}
		codeinfo.removeClass('btn-invalid');
		$('.regetcode_img').show();
		codeinfo.html(--time + str);
		timer = setInterval(function () {
			time--;
			codeinfo.html(time + str);

			if (time <= 0) {
				clearInterval(timer);
				timer = null;
				codeinfo.html('重新获取');
				$('.regetcode_img').hide();
				codeinfo.addClass('btn-invalid');
			}
		}, 1000);
}
//下一步注册 表单验证
	$('#j_go_next').on('click',function(){
		$.ajax({
			url:'/Reg/RegAct.html',
			type:'POST',
			dataType:'json',
			data:{
				'u_name':$("input[name='u_name']").val(),
				'u_pw':$("input[name='u_pw']").val(),
				'confirm_u_pw':$("input[name='confirm_u_pw']").val()
			}
		})
		.done(function(response){
			if($("#j_mescode").val() == ''){
				oTips.init('验证码不能为空');
			}else if(response.code == -4){
				oTips.init(response.msg);
			}else if(!$("#j_mescode").val() == '' && $("input[name='u_pw']").val() == ''){
				oTips.init('密码不能为空');
			}else if(!$("#j_mescode").val() == '' && $("input[name='confirm_u_pw']").val() == ''){
				oTips.init('确认密码不能为空');
			}else if(response.code == -5){
				oTips.init(response.msg);
			}else if(!$('#j-readme')[0].checked){
				oTips.init('请接受服务条款');
			}else{
				window.location.href="/KaiDian/SignUpSelect.html"
			}
		});
	});	
//选择注册类型
	$("#j_set_person").on('click',function(){
		window.location.href="/login/login.html";
	})
	$('#j_set_company').on('click',function(){
		$('.clause_zone').show();

	});		
	$('#j_deny').on('click',function(){
		$('.clause_zone').hide();
	});	
	$('#j_agree').on('click',function(){
		window.location.href = "/KaiDian/SettleInCorporate.html";
		telephone = $('input[name="telephone"]').val()
	});	
	$("#j_set_person").on('mouseover',function(){
		$(this).find("img").attr("src","/images/sic/person_btn_hover.png")
	})
	$("#j_set_person").on('mouseout',function(){
		$(this).find("img").attr("src","/images/sic/person_btn.png")
	})
	$("#j_set_company").on('mouseover',function(){
		$(this).find("img").attr("src","/images/sic/comp_btn_hover.png")
	})
	$("#j_set_company").on('mouseout',function(){
		$(this).find("img").attr("src","/images/sic/comp_btn.png")
	})
//企业注册表单页
$("#license_pic").on("click",function(){
	$("#business_license").trigger('click');
});
$("#identity_front_pic").on("click",function(){
	$("#identity_front").trigger('click');
});
$("#identity_back_pic").on("click",function(){
	$("#identity_back").trigger('click');
});

$("#brand_license_pic").on("click",function(){
	$("#brand_license").trigger('click');
});
//企业实力与风格认证
$(".raidos").on("click",function(){
	$(this).siblings('input[name="supplier_type"]').prop("checked","true");
	$(".raidos").removeClass('checked');
	$(this).addClass("checked");
	$('.j_identity_supplier_type_ntps').hide();
	if($(".raidos").eq(0).siblings('input[name="supplier_type"]').prop("checked")){
		$(".netstore").show();
		$(".realstore").hide();
	}else if($(".raidos").eq(1).siblings('input[name="supplier_type"]').prop("checked")){
		$(".netstore").hide();
		$(".realstore").show();
	}else{
		$(".netstore").hide();
		$(".realstore").hide();
	}
	
});

//商品链接验证码
function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (var i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

//品牌授权认证书
$('input[name="goods_captcha"]').attr("value",randomString(6));


//绑定实体店图片修改
//@author liubw
//2015-5-1
$(".realstore_up_zone").find('img').on("click",function(){
	var id = $(this).attr("id");
		$('#check_goods').attr('data_realstore_id', id);
		$('#check_goods').trigger('click');
});

$('.realstore_up_zone').find('img').css({'width':'85px','height':'85px','border':'2px solid #d2d2d2','border-radius':'6px'});
//图片处理
	$form = $('form')
	$("input[type=file]").on('change', function() {

		var _this = this;
		imgId = $(this).attr('id');

		//loading效果
		var loading_data = [];
		loading_data.img_url 	= '/images/loading.gif';
		loading_data.server_id  = '';
		if(imgId=='check_goods'){
			loading_data.input_file_tag = $('#check_goods').attr("data_realstore_id");
		}
		getImg(loading_data);


		oImgCompress.init({
			file: _this,
			minWidth: 640,
			minHeight: 640,
			callback: function(imgData) {
				//图片处理完成后上传到后台
				var form_upload = null;
				var fileObj = document.getElementById(imgId).files[0];
				
				if (imgData.success) {
					$('input[type=file]')[0].files[0].value = '';
					form_upload = new FormData($form[0]);
					form_upload.append('img_base64', imgData.data);
				} else {
					//upload original img
					var form_upload = new FormData();
					var fileObj = document.getElementById(imgId).files[0];
					form_upload.append('_file', fileObj);
				}

				form_upload.append('conver_size_str', upload_g_size);

				if(imgId == 'check_goods'){
					//多图片上传，添加该参数识别input_file的标签
					form_upload.append('input_file_tag', $('#check_goods').attr("data_realstore_id"));
				}

				$.ajax({
					url: __up_url_path + 'upload.php',
					type: 'POST',
					data: form_upload,
					dataType: 'json',
					processData: false,
					contentType: false
				})
				.done(function (response) {
					var imgUrl =response.img_url,
						serverId = response.server_id;
					if(imgId == 'business_license'){
						businessLicense = {
							"img_url":imgUrl,
							"server_id":serverId
						}
						getImg(response);
					}else if(imgId == 'identity_front'){
						identityFront = {
							"img_url":imgUrl,
							"server_id":serverId
						}
						getImg(response);
					}else if(imgId == 'identity_back'){
						identityBack = {
							"img_url":imgUrl,
							"server_id":serverId
						}
						getImg(response);
					}else if(imgId == 'identity_hold'){
						identityHold = {
							"img_url":imgUrl,
							"server_id":serverId
						}
					}else if(imgId == 'check_goods'){

						getImg(response);

					}else if(imgId == 'brand_license'){
						brandLicense = {
							"img_url":imgUrl,
							"server_id":serverId
						}
						getImg(response);
					}

					$('input[type=file]').val('');
					
				})
			}
		});
	});

//上传数据
	$("#j_submit").on('click', function() {
		$.ajax({
			url: '/KaiDian/Todo_supplierAddorUpdate.html',
			type: 'POST',
			dataType: 'json',
			data: {
				'supplier_id':supplierId,
				'telephone': telephone,
				'company_name': $('input[name="company_name"]').val(),
				'business_license': businessLicense,
				'corporate_name': $('input[name="corporate_name"]').val(),
				'identity_num': $('input[name="identity_num"]').val(),
				'identity_front': identityFront,
				'identity_back': identityBack,
				'email': $('input[name="email"]').val(),
				'store_name': $('input[name="store_name"]').val(),
				'identity_hold': identityHold,
				'locate_id':$('#city').val(),
				'supplier_name': $('input[name="supplier_name"]').val(),
				'store_name': $('input[name="store_name"]').val(),
				'supplier_type': $('input[name="supplier_type"]:checked').val(),
				'goods_captcha': $('input[name="goods_captcha"]').val(),
				'goods_link': $('input[name="goods_link"]').val(),
				'check_goods': checkGoodsTen,
				'brand_license':brandLicense,
				'commit':1
				}
			})
			.done(function (response) {
				checkerror(response);
				//判断少于10张产品图
				if (response.status.code === 30021) {
					$(".j_identity_check_goods_ntps").show();
					$(".j_identity_check_goods_ntps b").text('请上传10张产品实拍图片');
				}
				if ($("#province").val() =='') {
					$('.j_identity_locate_ntps').show();
					$('.j_identity_locate_ntps b').text('请选择地区');
					oTips.init("提交信息有误，请检查后提交")
					return false;
				};
				console.log(response.status.code);
				if (response.status.code === 0) {
					window.location.href="/KaiDian/SignUpComplate.html"
				}else{
					oTips.init("提交信息有误，请检查后提交")
				};
			})
			.fail(function (response) {
				console.log(response);
			});

	});
// 上传后的callback
	function getImg(response){
		if(imgId == 'check_goods'){
			var realstore_up_zone_id = response.input_file_tag;
			$("#"+realstore_up_zone_id).attr("src",response.img_url);
			$("#"+realstore_up_zone_id).attr("data_server_id",response.server_id);
			checkGoodsTen = [];
			var curr_insert_server_id = "";
			for (var i = 0; i < $(".realstore_up_zone").find('img').length; i++) {		
				curr_insert_server_id = $('#check_goods_pic' + i).attr('data_server_id');
				if(curr_insert_server_id){
					checkGoods = {
						"img_url":$('#check_goods_pic' + i).attr('src'),
						"server_id":curr_insert_server_id
					}

					checkGoodsTen.push(checkGoods)
				}
				
			};
			if (checkGoodsTen.length>10) {
				$(".j_identity_check_goods_ntps").show();
				$(".j_identity_check_goods_ntps b").text('商品不能超过10张');
				return false; 
			}
		}else{
			$('#'+imgId).siblings('img').attr('src',response.img_url);
			$('#'+imgId).siblings('img').css({'width':'85px','height':'85px','border':'2px solid #d2d2d2','border-radius':'6px'});
		}
		
	};
$("#j_submit").on('click', function() {
	$.ajax({
		url: '/Todo_checkMsg.html',
		type: 'POST',
		dataType: 'json',
		})
		.done(function (response) {
			console.log(response);
		})
		.fail(function (response) {
			console.log(response);
		});

});
//判断审核状态
var checkMsg = $("#check_msg").text();
if(checkMsg == 'success'){
	$("#check_sta").text("审核已通过");
	$("#check_sta_go").html('请进入<a href="/" class="wtcolor" target="_blank">卖家中心</a>');
	$("#check_pic").html('<img src="/images/sic/gopass.png">');
	$(".check_zone").css("text-align","center")
}else if(checkMsg == 'no'){
	$("#check_sta").text("审核中...");
	$("#check_sta_go").html('预计在2～3个工作日内审核完毕，我们会尽快审核，请您耐心等待，结果将通过短信通知您，敬请留意！如有问题，请联系<span class="wtcolor">service@woqumai.com</span>');
}else{
	$("#check_sta").text("审核未通过");
	$("#check_sta_go").html('原因：'+checkMsg+'<br/>请<a href="/KaiDian/SettleInCorporateEdit.html" class="wtcolor" target="_blank">修改开店申请</a>后再提交。')
	$("#check_pic").html('<img src="/images/sic/nopass.png">');
	$(".check_zone").css("text-align","center")
}


//错误提示
$('input').on('keyup',function(){
	$.ajax({
		url: '/KaiDian/Todo_checkData.html',
		type: 'POST',
		dataType: 'json',
		data:{
			'supplier_id':supplierId,
			'telephone': telephone,
			'company_name': $('input[name="company_name"]').val(),
			'business_license': businessLicense,
			'corporate_name': $('input[name="corporate_name"]').val(),
			'identity_num': $('input[name="identity_num"]').val(),
			'identity_front': identityFront,
			'identity_back': identityBack,
			'email': $('input[name="email"]').val(),
			'store_name': $('input[name="store_name"]').val(),
			'identity_hold': identityHold,
			'locate_id':$('#city').val(),
			'supplier_name': $('input[name="supplier_name"]').val(),
			'store_name': $('input[name="store_name"]').val(),
			'supplier_type': $('input[name="supplier_type"]:checked').val(),
			'goods_captcha': $('input[name="goods_captcha"]').val(),
			'goods_link': $('input[name="goods_link"]').val(),
			'check_goods': checkGoodsTen,
			'brand_license':brandLicense
		}
	})
	.done(function (response) {
		checkerror(response);
		console.log(response)
	})
	.fail(function (response) {
		console.log(response);
	});
});
$('input[type="file"]').on('change',function(){
	$.ajax({
		url: '/KaiDian/Todo_checkData.html',
		type: 'POST',
		dataType: 'json',
		data:{
			'supplier_id':supplierId,
			'telephone': telephone,
			'company_name': $('input[name="company_name"]').val(),
			'business_license': businessLicense,
			'corporate_name': $('input[name="corporate_name"]').val(),
			'identity_num': $('input[name="identity_num"]').val(),
			'identity_front': identityFront,
			'identity_back': identityBack,
			'email': $('input[name="email"]').val(),
			'store_name': $('input[name="store_name"]').val(),
			'identity_hold': identityHold,
			'locate_id':$('#city').val(),
			'supplier_name': $('input[name="supplier_name"]').val(),
			'store_name': $('input[name="store_name"]').val(),
			'supplier_type': $('input[name="supplier_type"]:checked').val(),
			'goods_captcha': $('input[name="goods_captcha"]').val(),
			'goods_link': $('input[name="goods_link"]').val(),
			'check_goods': checkGoodsTen,
			'brand_license':brandLicense
		}
	})
	.done(function (response) {
		console.log(response)
		$(".j_business_license_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_check_goods_ntps").hide();
	})
	.fail(function (response) {
		console.log(response);
	});
});
$('select').on('change',function(){
	$.ajax({
		url: '/KaiDian/Todo_checkData.html',
		type: 'POST',
		dataType: 'json',
		data:{
			'supplier_id':supplierId,
			'telephone': telephone,
			'company_name': $('input[name="company_name"]').val(),
			'business_license': businessLicense,
			'corporate_name': $('input[name="corporate_name"]').val(),
			'identity_num': $('input[name="identity_num"]').val(),
			'identity_front': identityFront,
			'identity_back': identityBack,
			'email': $('input[name="email"]').val(),
			'store_name': $('input[name="store_name"]').val(),
			'identity_hold': identityHold,
			'locate_id':$('#city').val(),
			'supplier_name': $('input[name="supplier_name"]').val(),
			'store_name': $('input[name="store_name"]').val(),
			'supplier_type': $('input[name="supplier_type"]:checked').val(),
			'goods_captcha': $('input[name="goods_captcha"]').val(),
			'goods_link': $('input[name="goods_link"]').val(),
			'check_goods': checkGoodsTen,
			'brand_license':brandLicense
		}
	})
	.done(function (response) {
		console.log(response)
		$('.j_identity_locate_ntps').hide();
	})
	.fail(function (response) {
		console.log(response);
	});
});

function checkerror(response){
	if(response.status.code === 30034){
		$(".j_company_name_ntps").show();
		$(".j_company_name_ntps b").text('请输入企业名称');
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30035){
		$(".j_business_license_ntps").show();
		$(".j_business_license_ntps b").text('请上传营业执照');
		$(".j_company_name_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30036){
		$(".j_corporate_name_ntps").show();
		$(".j_corporate_name_ntps b").text('请输入法人姓名');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30037){
		$(".j_corporate_name_ntps").show();
		$(".j_corporate_name_ntps b").text('请检查法人姓名是否正确');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30030){
		$(".j_identity_num_ntps").show();
		$(".j_identity_num_ntps b").text('请输入身份证号码');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30046 || !oVerify.isId($("input[name='identity_num']").val())){
		$(".j_identity_num_ntps").show();
		$(".j_identity_num_ntps b").text('身份证输入有误');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30022){
		$(".j_identity_fb_ntps").show();
		$(".j_identity_fb_ntps b").text('请上传身份证正面照');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30023){
		$(".j_identity_fb_ntps").show();
		$(".j_identity_fb_ntps b").text('请上传身份证背面照');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30039){
		$(".j_identity_locate_ntps").show();
		$(".j_identity_locate_ntps b").text('请选择地区');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30027){
		$(".j_identity_supplier_name_ntps").show();
		$(".j_identity_supplier_name_ntps b").text('请输入联系人姓名');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30026){
		$(".j_identity_supplier_name_ntps").show();
		$(".j_identity_supplier_name_ntps b").text('请检查联系人姓名是否正确');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30031){
		$(".j_identity_email_ntps").show();
		$(".j_identity_email_ntps b").text('请输入邮箱');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30040){
		$(".j_identity_email_ntps").show();
		$(".j_identity_email_ntps b").text('邮箱不正确');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30029){
		$(".j_identity_store_name_ntps").show();
		$(".j_identity_store_name_ntps b").text('请输入店铺名称');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30032){
		$(".j_identity_supplier_type_ntps").show();
		$(".j_identity_supplier_type_ntps b").text('请选择开店类型');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30032){
		$(".j_identity_supplier_type_ntps").show();
		$(".j_identity_supplier_type_ntps b").text('请选择开店类型');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	}else if(response.status.code === 30020){
		$(".j_identity_goods_link_ntps").show();
		$(".j_identity_goods_link_ntps b").text('请填写网店商品链接');
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_supplier_type_ntps").hide();
	}else if(response.status.code === 0){
		$(".j_identity_supplier_type_ntps").hide();
		$(".j_company_name_ntps").hide();
		$(".j_business_license_ntps").hide();
		$(".j_corporate_name_ntps").hide();
		$(".j_identity_num_ntps").hide();
		$(".j_identity_fb_ntps").hide();
		$(".j_identity_locate_ntps").hide();
		$(".j_identity_supplier_name_ntps").hide();
		$(".j_identity_email_ntps").hide();
		$(".j_identity_store_name_ntps").hide();
		$(".j_identity_goods_link_ntps").hide();
	};
}
//current page nav hightlight
var curURL = document.location.toString();
$(".menu li").find('a').prop('style','');
$(".menu li").find('a').each(function(){
    if (curURL.indexOf(this.href) != -1){
        $(this).closest('a').css('color','#ac9456');
    }
});
//用户保护条款
$('.gruadarticle').on('click',function(){
	$('.login_clause_zone').show();
});
$('#j_login_agree').on('click',function(){
	$('.login_clause_zone').hide();
});
//End
});
