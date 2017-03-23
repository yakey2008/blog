/**
 * Author: TK 阿初
 * Date: 2015.05.01
 * Email: slimeball@foxmail.com
 */
define(function(require) {

	function SettleInCorporateEditInit(){
		//回填数据
		$.ajax({
			url: '/KaiDian/Todo_showOneCheck.html',
		})
		.done(function (response){
			supplierId = response.result[0].supplier_id;
			var locate_id = response.result[0].locate_id;
			if(response.result[0].reason == 'no'){
				$('.nopass_reson').find('span').text('正在审核中')
			}else{
				$('.nopass_reson').find('span').text(response.result[0].reason);
			}		
			$('input[name="company_name"]').val(response.result[0].company_name);
			$('#license_pic').attr('src',response.result['business_license'].img_url);
			$('#license_pic').css({'width':'85px','height':'85px','border':'2px solid #d2d2d2','border-radius':'6px'});
			$('input[name="corporate_name"]').val(response.result[0].corporate_name);
			$('input[name="identity_num"]').val(response.result[0].identity_num);
			$('#identity_front_pic').attr('src',response.result['identity_front'].img_url);
			$('#identity_front_pic').css({'width':'85px','height':'85px','border':'2px solid #d2d2d2','border-radius':'6px'});
			$('#identity_back_pic').attr('src',response.result['identity_back'].img_url);
			$('#identity_back_pic').css({'width':'85px','height':'85px','border':'2px solid #d2d2d2','border-radius':'6px'});
			$('input[name="supplier_name"]').val(response.result[0].supplier_name);
			$('input[name="email"]').val(response.result[0].email);
			$('input[name="store_name"]').val(response.result[0].store_name);
			$('input[name="goods_link"]').val(response.result[0].goods_link);
			if(response.result.brand_license){
				$('#brand_license_pic').attr('src',response.result['brand_license'].img_url);
			}
			$('#brand_license_pic').css({'width':'85px','height':'85px','border':'2px solid #d2d2d2','border-radius':'6px'});

			if (response.result[0].supplier_type == 'v_company') {
				$(".netstore").show();
				$("#v_company").addClass('checked');
				$("#v_company").siblings("input").attr('checked','checked')
			}else if(response.result[0].supplier_type == 'r_company'){
				$(".realstore").show();
				$("#r_company").addClass('checked');
				$("#r_company").siblings("input").attr('checked','checked');

				//绑定实体店图片修改
				//@author liubw
				//2015-5-1
				if(response.result.check_goods){
					for (var i = 0; i < $(".realstore_up_zone").find('img').length; i++) {
						$('#check_goods_pic' + i).attr('src',response.result['check_goods'][i].img_url);
						$('#check_goods_pic' + i).attr('data_server_id',response.result['check_goods'][i].server_id);

					};
				}
			


			}else{
				$("#n_company").addClass('checked');
				$("#n_company").siblings("input").attr('checked','checked')
			};

			
			//重新复制给地区
			//@author liubw
			//2015-5-1
			var city_id 	= '';
			var province_id = '';
			if(locate_id){
				province_id = locate_id.substr(0,6);
			}

			if(locate_id.length>=9){
				city_id     = locate_id.substr(0,9)
			}

			var oLocal = new SelectLocal('#province', '#city', '#district');
				oLocal.defaultSelect(province_id, city_id,'');

			});
	}

	SettleInCorporateEditInit();

//End
});
