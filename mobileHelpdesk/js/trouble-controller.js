angular.module('trouble.controller', [])
	//邹贵初 start
	//导航页
	.controller('TroubleNavCtrl', function ($scope, $state, backend) {
		//修改webview原生title
		window.location.href = 'vipoa://updateTitleBar?' + encodeURI('报障&咨询');
		//获取 当前用户信息
		$scope.currentUser = [];
		backend.getBackendInfo().then(function (data) {
			console.log(data);
			//data.CurrentUser.Department = "全国物流中心";
			$scope.currentUser = data.CurrentUser;
			if (data != null) {} else {
				// 查询不到 用户信息
				// loginout();
			}

		}, function (data) {
			// $scope.alert("提示", '登录超时，请重新登录');
			// loginout();
		});
		$scope.gounite = function () {
			$state.go('unite', {});
		}
		$scope.historyList = function () {
			$state.go('historyList', {});
		}

		//导航页 链接
		// $scope.linkHref = {
		// 	tbBegin: "#/trouble/unite",
		// 	tbHistoryList: "#/trouble/historyList"
		// }
	})
	//邹贵初 end
	.controller('TroubleCtrl', ["$scope", "$state", "$ionicPopup", "$http", "$rootScope", "$timeout", "$ionicLoading", "$sce", "$q", "ngDialog", "$ionicModal", "backend", "troubleServices",
		function ($scope, $state, $ionicPopup, $http, $rootScope, $timeout, $ionicLoading, $sce, $q, ngDialog, $ionicModal, backend, troubleServices) {
			//加载滚动条
			$scope.loading = function () {
				$ionicLoading.show({
					template: 'Loading...'
				});
			};
			$scope.stoploading = function () {
				$ionicLoading.hide();
			};

			//弹出框
			$scope.alert = function (title, message) {
				return $ionicPopup.alert({
					title: title,
					template: message
				});
			}
			//离开我要报障页面，关闭弹出层
			$scope.$on('$ionicView.beforeLeave', function () {
				$scope.modal.hide();
				$scope.typepropertymodal.hide();
				$scope.firstareamodal.hide();
				$scope.secondareamodal.hide();
				$scope.effectareamodal.hide();
			})

			$scope.showmask = function () {
				$ionicLoading.show({
					content: 'Loading',
					animation: 'fade-in',
					showBackdrop: true,
					maxWidth: 200,
					showDelay: 0
				});
			}

			//获取 当前用户信息
			$scope.currentUser = [];
			backend.getBackendInfo().then(function (data) {
				console.log(data);
				//data.CurrentUser.Department = "全国物流中心";
				$scope.currentUser = data.CurrentUser;
				if (data != null) {} else {
					// 查询不到 用户信息
					// loginout();
				}

			}, function (data) {
				// $scope.alert("提示", '登录超时，请重新登录');
				// loginout();
			});

			$scope.settings = {
				enableFriends: true
			};

			// 初始化页面表单数据
			$scope.formData = {
				"TroubleSysTypeID": "",
				"TroubleTypeID": "",
				"TypePropertyID": "",
				"TroubleAreaID": "",
				"TroubleDescription": "",
				"OAAccount": "",
				"EffectArea": "",
				"TroubleImg": "",
				"FileInfo": ""
			}
			//是否是landesk接口
			$scope.isnotLandesk = false;
			$scope.landeskData={
				TroubleDescription:"",
			}
			//加载 故障类别
			$scope.troubleSysTypes = [];
			$scope.selectedTopSysType; //记录已选择的故障类别
			$scope.selectedLastSysType; //记录已选择的末级故障类别
			//隐藏,显示 子类
			$scope.isShowChildren = false;

			//故障类别按钮初始化
			$scope.showmask();
			troubleServices.getTroubleSysTypes().then(function (data) {
				console.log(data);
				$ionicLoading.hide();
				$scope.troubleSysTypes = data.list;
				//添加landesk分类 Start
				$scope.troubleSysTypes.unshift({btnStyle : "button-selected",systypename:"IT",troublesystypeid:"landesk"})
				// for (var i = 0; i < $scope.troubleSysTypes.length; i++) {
				// 	if ($scope.troubleSysTypes[i].btnStyle == "button-selected") {
				// 		$scope.troubleSysTypes[i].btnStyle = "button-plain";
				// 		break;
				// 	}
				// }
				//添加landesk分类 End

			}, function (data) {
				var alertPopup = $ionicPopup.alert({
					title: '网络不给力，请检查网络设置'
				});
				alertPopup.then(function (res) {
					// $state.go('navigate');
					self.location = "vipoa://close";
				});
				// $scope.alert('网络不给力，请检查网络设置');
				// $state.go('navigate');
				// $scope.alert("提示", '获取分类失败');
				return;
			});

			//选择问题类型
			$scope.selectInfo = {
				type: null,
				typeproperty: null,
				firstarea: null,
				secondarea: null
			};
			//分类弹出
			$scope.childtypemessage = "";
			// $scope.isShowNoChildType = false;

			$ionicModal.fromTemplateUrl('templates/trouble/trouble-children-type.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.childtypemodal = modal;
			});
			$scope.openTroubleChildType = function (selectedTroubleChildType) {
				if ($scope.isShowChildren == true && $scope.selectedTopSysType === "") {
					$scope.alert("提示", '请选择类别');
					return;
				}
				if ($scope.sysTypeChildren == null || $scope.sysTypeChildren.length == 0) {
					// $scope.isShowChildren = true;
					$scope.childtypemessage = GeneralData.NoDataMsg;
				}
				// else {
				// 	$scope.isShowChildren = false;
				// }
				$scope.childtypemodal.show();
			}

			$scope.returnChildType = function (param) {
				$scope.selectTroubleChildType(param.sysType);
				$scope.selectedTroubleChildType = param.sysType;
				$scope.childtypemodal.hide();
			}


			//问题类型弹出框 
			$scope.typemessage = "";
			$scope.isShowNoType = false;

			$ionicModal.fromTemplateUrl('templates/trouble/trouble-type.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.modal = modal;
			});

			$scope.openTroubleType = function (selectedTroubleType) {
				if ($scope.isShowChildren == true && $scope.selectedLastSysType == "") {
					$scope.alert("提示", '请选择分类');
					return;
				}
				if ($scope.troubleTypes == null || $scope.troubleTypes.length == 0) {
					$scope.isShowNoType = true;
					$scope.typemessage = GeneralData.NoDataMsg;
				} else {
					$scope.isShowNoType = false;
				}
				$scope.modal.show();
			}

			$scope.returnType = function (param) {
				$scope.selectTroubleType(param.type);
				$scope.selectedTroubleType = param.type;
				$scope.modal.hide();
			}

			//具体问题弹出框 
			$scope.typepropertymessage = "";
			$scope.isShowNoTypeProperty = false;

			$ionicModal.fromTemplateUrl('templates/trouble/trouble-typeproperty.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.typepropertymodal = modal;
			});

			$scope.openTypeProperty = function (selectedTypeProperty) {
				if ($scope.isShowChildren == true && $scope.selectedLastSysType == "") {
					$scope.alert("提示", '请选择分类');
					return;
				}
				if ($scope.typePropertys == null || $scope.typePropertys.length == 0) {
					$scope.isShowNoTypeProperty = true;
					$scope.typepropertymessage = GeneralData.NoDataMsg;
				} else {
					$scope.isShowNoTypeProperty = false;
				}
				$scope.typepropertymodal.show();
			}

			$scope.returnTypeProperty = function (param) {
				$scope.selectedTypeProperty = param.typeproperty;
				$scope.typepropertymodal.hide();

			}

			//报障区域（一级）弹出框 
			$scope.firstareamessage = "";
			// $scope.isShowNoFirstArea = false;
			//二级区域显示隐藏
			$scope.isShowNoSecondArea = true;
			$scope.secendAreaPlaceholder = "请选择二级区域";

			$ionicModal.fromTemplateUrl('templates/trouble/trouble-firstarea.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.firstareamodal = modal;
			});

			$scope.openFirstArea = function (selectedFirstArea) {
				if ($scope.isShowChildren == true && $scope.selectedLastSysType == "") {
					$scope.alert("提示", '请选择分类');
					return;
				}
				if ($scope.firstAreas == null || $scope.firstAreas.length == 0) {
					$scope.isShowNoFirstArea = true;
					$scope.firstareamessage = GeneralData.NoDataMsg;
				} else {
					$scope.isShowNoFirstArea = false;
				}


				$scope.firstareamodal.show();
			}

			$scope.returnFirstArea = function (param) {
				$scope.selectFirstArea(param.firstarea);
				$scope.selectedFirstArea = param.firstarea;
				$scope.firstareamodal.hide();
			}

			//报障区域（二级）弹出框 
			$scope.secondareamessage = "";

			$ionicModal.fromTemplateUrl('templates/trouble/trouble-secondarea.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.secondareamodal = modal;
			});

			$scope.openSecondArea = function (selectedSecondArea) {
				if ($scope.isShowChildren == true && $scope.selectedLastSysType == "") {
					$scope.alert("提示", '请选择分类');
					return;
				}

				if ($scope.firstAreas == null || $scope.firstAreas.length == 0) {
					$scope.alert("提示", '请先选择一级区域');
					return;
				}

				if ($scope.secondAreas == null || $scope.secondAreas.length == 0) {
					$scope.isShowNoSecondArea = false;
					$scope.secondareamessage = GeneralData.NoDataMsg;
				} else {
					$scope.isShowNoSecondArea = true;
				}
				$scope.secondareamodal.show();
			}

			$scope.returnSecondArea = function (param) {
				$scope.selectedSecondArea = param.secondarea;
				$scope.isShowNoSecondArea = true;
				$scope.secondareamodal.hide();
			}

			//影响范围弹出框 
			$scope.effectareamessage = "";
			$scope.isShowNoEffectArea = false;

			$ionicModal.fromTemplateUrl('templates/trouble/trouble-effectarea.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.effectareamodal = modal;
			});

			$scope.openEffectArea = function (selectedEffectArea) {
				if ($scope.effectAreas == null || $scope.effectAreas.length == 0) {
					$scope.isShowNoEffectArea = true;
					$scope.secondareamessage = GeneralData.NoDataMsg;
				} else {
					$scope.isShowNoEffectArea = false;
				}
				$scope.effectareamodal.show();
			}

			$scope.returnEffectArea = function (param) {
				$scope.selectedEffectArea = param.effectarea;
				$scope.effectareamodal.hide();
			}

			//故障类别子类
			$scope.sysTypeChildren = [];

			//故障类型按钮
			$scope.troubleTypes = [];
			//$scope.selectedTroubleType = "";
			$scope.selectedTroubleType = null; //选择的值是一个对象

			//具体问题按钮
			$scope.typePropertys = [];
			$scope.selectedTypeProperty = null;

			//报障区域
			$scope.selectedAreaID; //记录已选择的区域
			$scope.firstAreas = [];
			$scope.selectedFirstArea = null; //选择的值是一个对象

			//二级区域
			$scope.secondAreas = [];
			$scope.selectedSecondArea = null;

			//影响范围
			$scope.effectAreas = [{
				"AreaName": "本人"
			}, {
				"AreaName": "本组"
			}, {
				"AreaName": "本部门"
			}, {
				"AreaName": "本办公区域"
			}, {
				"AreaName": "全体用户"
			}, {
				"AreaName": "其他"
			}];
			//邹贵初 默认选中本人，新设计图默认不选中 暂时注释 Start
			// $scope.selectedEffectArea = $scope.effectAreas[0];
			//邹贵初  End
			$scope.description = "";

			//清空下拉框
			$scope.clearSelects = function () {
				$scope.clearTroubleChildTypes();
				$scope.clearTroubleTypes();
				$scope.clearTypePropertys();
				$scope.clearFirstAreas();
				$scope.clearSecondAreas();
				// $scope.clearEffectArea();
				$scope.clearDescription();
				$scope.clearImgflow();
				$scope.selectedEffectArea = $scope.effectAreas[0];
				$scope.isShowNoSecondArea = true;

			}

			////清空下拉框
			//$scope.clearSelects = function () {
			//    $scope.troubleTypes = [];
			//    $scope.typePropertys = [];
			//    $scope.firstAreas = [];
			//    $scope.secondAreas = [];
			//    $scope.effectAreas = [];
			//}
			//分类
			$scope.clearTroubleChildTypes = function () {
				$scope.sysTypeChildren = [];
				$scope.selectedTroubleChildType = null;
			}
			//故障类型
			$scope.clearTroubleTypes = function () {
				$scope.troubleTypes = [];
				$scope.selectedTroubleType = null;
			}
			//具体问题
			$scope.clearTypePropertys = function () {
				$scope.typePropertys = [];
				$scope.selectedTypeProperty = null;
			}
			//报障区域
			$scope.clearFirstAreas = function () {
				$scope.firstAreas = [];
				$scope.selectedFirstArea = null;
			}
			//二级区域
			$scope.clearSecondAreas = function () {
				$scope.secondAreas = [];
				$scope.selectedSecondArea = null;
			}
			//影响范围
			// $scope.clearEffectArea = function () {
			// 	$scope.effectAreas = [];
			// 	$scope.selectedEffectArea = null;
			// }
			//清空描述
			$scope.clearDescription = function () {
				$scope.description = "";
				$scope.formData.TroubleDescription = "";
				// $scope.selectedSecondArea = null;
			}
			//清空图片
			$scope.clearImgflow = function () {
				$timeout(function () {
					angular.element(document.getElementById('j-cancelimg')).triggerHandler('click');
				}, 0);
			}

			// 选择故障类别
			$scope.selectSysType = function (item) {
				console.log(item);
				if ($scope.selectedTopSysType == item.troublesystypeid) {
					//选择的项不变，不操作
					return;
				}
				for (var i = 0; i < $scope.troubleSysTypes.length; i++) {
					if ($scope.troubleSysTypes[i].btnStyle == "button-selected") {
						$scope.troubleSysTypes[i].btnStyle = "button-plain";
						break;
					}
				}
				item.btnStyle = "button-selected";
				$scope.selectedTopSysType = item.troublesystypeid;

				//先清空选项
				$scope.clearSelects();

				//判断是否需要显示子类
				if (item.children != null && item.children.length > 0) {
					//有子类
					//绑定子类、显示
					$scope.sysTypeChildren = item.children;
					$scope.isShowChildren = true;
					$scope.isnotLandesk = true;
					//清空子类选择
					// for (var i = 0; i < $scope.sysTypeChildren.length; i++) {
					// 	if ($scope.sysTypeChildren[i].btnStyle == "button-selected") {
					// 		$scope.sysTypeChildren[i].btnStyle = "button-plain";
					// 		break;
					// 	}
					// }
					// $scope.selectedLastSysType = "";
				} else {
					//没有子类
					$scope.isShowChildren = false;
					$scope.selectedLastSysType = item.troublesystypeid;	
					//判断是否landesk
					if(item.troublesystypeid ==='landesk'){
						$scope.isnotLandesk = false;
					}else{
						$scope.isnotLandesk = true;
						//直接加载绑定此故障类别的问题类型
						$scope.getTroubleTypeBySysTypeID(item.troublesystypeid);
					}
				}
			}

			// 原按钮式选择故障类别子类
			// $scope.selectSysTypeChildren = function (item) {
			// 	console.log(item);
			// 	if ($scope.selectedLastSysType == item.troublesystypeid) {
			// 		//选择的项不变，不操作
			// 		return;
			// 	}

			// 	for (var i = 0; i < $scope.sysTypeChildren.length; i++) {
			// 		if ($scope.sysTypeChildren[i].btnStyle == "button-selected") {
			// 			$scope.sysTypeChildren[i].btnStyle = "button-plain";
			// 			break;
			// 		}
			// 	}

			// 	//先清空选项
			// 	$scope.clearSelects();

			// 	item.btnStyle = "button-selected";
			// 	//加载绑定此故障类别的问题类型
			// 	$scope.selectedLastSysType = item.troublesystypeid;
			// 	$scope.getTroubleTypeBySysTypeID(item.troublesystypeid);
			// }

			$scope.selectTroubleChildType = function (item) {
				console.log(item);

				if ($scope.selectedTroubleChildType == item) {
					//选择的项不变，不操作
					return;
				}

				$scope.selectedTroubleChildType = item;
				$scope.selectedLastSysType = item.troublesystypeid;
				$scope.getTroubleTypeBySysTypeID(item.troublesystypeid);
			}

			$scope.selectTroubleType = function (item) {
				console.log(item);
				if ($scope.selectedTroubleType == item) {
					//选择的项不变，不操作
					return;
				}

				$scope.selectedTroubleType = item;
				//加载具体问题
				$scope.getTypePropertyByTypeID(item.troubletypeid);
				//加载报障区域
				$scope.getTroubleAreaBySysID(item.troublesysid);
			}

			$scope.selectFirstArea = function (item) {
				console.log(item);
				if ($scope.selectedFirstArea == item) {
					//选择的项不变，不操作
					return;
				}
				$scope.selectedFirstArea = item;
				//加载二级区域
				$scope.secondAreas = item.secondAreas;
				//二级区域隐藏显示 start
				if ($scope.secondAreas == null || $scope.secondAreas.length == 0) {
					$scope.isShowNoSecondArea = false;
					$scope.secondareamessage = GeneralData.NoDataMsg;
				} else {
					$scope.isShowNoSecondArea = true;
				}
				//二级区域隐藏显示 end
				if ($scope.secondAreas.length > 0) {

					$scope.secendAreaPlaceholder = "请选择二级区域";
					//					$scope.selectedSecondArea = $scope.secondAreas[0];
					//				$scope.selectedSecondArea = $scope.secondAreas[0].areaid;
				} else {
					$scope.clearSecondAreas();
					$scope.secendAreaPlaceholder = "没有二级区域数据";
				}
			}

			//根据故障类别获取问题类型
			$scope.getTroubleTypeBySysTypeID = function (troubleSysTypeID) {
				console.log("根据分类" + troubleSysTypeID + "获取问题类型");

				troubleServices.getTroubleTypeBySysTypeID(troubleSysTypeID).then(function (data) {
					console.log(data);
					$scope.troubleTypes = data.list;
					////默认问题类型
					//if ($scope.troubleTypes.length > 0) {
					//	$scope.selectTroubleType($scope.troubleTypes[0]);
					//} else {
					//    $scope.clearSelects();
					//}
				}, function (data) {
					$scope.alert('网络不给力，请检查网络设置');
					// $scope.alert("提示", '获取问题类型失败');
					return;
				});
			}

			//根据问题类型获取具体问题
			$scope.getTypePropertyByTypeID = function (troubleTypeID) {
				console.log("根据问题类型" + troubleTypeID + "获取具体问题");
				troubleServices.getTypePropertyByTypeID(troubleTypeID).then(function (data) {
					console.log(data);
					$scope.typePropertys = data.list;
					if ($scope.typePropertys.length > 0) {
						////默认具体问题
						//$scope.selectedTypeProperty = $scope.typePropertys[0];
					} else {
						$scope.clearTypePropertys();
					}
				}, function (data) {
					$scope.alert('网络不给力，请检查网络设置');
					// $scope.alert("提示", '获取具体问题失败');
					return;
				});
			}

			//根据报障系统获取报障区域
			$scope.getTroubleAreaBySysID = function (troubleSysID) {
				console.log("根据系统" + troubleSysID + "获取区域");
				troubleServices.getTroubleAreaBySysID(troubleSysID).then(function (data) {
					console.log(data);
					$scope.firstAreas = data.list;
					//默认具体问题
					if ($scope.firstAreas.length > 0) {
						//$scope.selectFirstArea($scope.firstAreas[0]);
					} else {
						$scope.clearFirstAreas();
						$scope.clearSecondAreas();
					}
				}, function (data) {
					$scope.alert('网络不给力，请检查网络设置');
					// $scope.alert("提示", '获取区域失败');
					return;
				});
			}
			// 报障登记
			$scope.sendTrouble = function (item) {
				$scope.loading();
				var showMsg = CheckTroubleData($scope);
				var submiturl = '';
				var submitdata = '';
				if (showMsg != "") {
					$scope.stoploading();
					$ionicPopup.alert({
						title: "提示",
						template: showMsg
					});
					return;
				}
				if($scope.isnotLandesk){
					// 获取表单数据	
					$scope.formData.TroubleSysTypeID = $scope.selectedLastSysType;
					$scope.formData.TroubleTypeID = $scope.selectedTroubleType.troubletypeid;
					$scope.formData.TypePropertyID = $scope.selectedTypeProperty.typepropertyid;
					$scope.formData.TroubleAreaID = $scope.selectedFirstArea.areaid;
					if ($scope.selectedSecondArea != null) {
						$scope.formData.TroubleAreaID = $scope.selectedSecondArea.areaid;
					}
					$scope.formData.OAAccount = $scope.currentUser.Account;
					$scope.formData.EffectArea = $scope.selectedEffectArea.AreaName;

					var uploadfiles = document.getElementsByName('uploadFile');
					if (uploadfiles != null && uploadfiles != undefined) {
						if (uploadfiles.length > 0) {
							$scope.formData.FileData = uploadfiles[0].innerHTML;
						}
					}
					submiturl = 'Trouble/SubmitTrouble';
					submitdata = $scope.formData;
				}else{
					var uploadfiles = document.getElementsByName('uploadFile');
					if (uploadfiles != null && uploadfiles != undefined) {
						if (uploadfiles.length > 0) {
							$scope.landeskData.FileData = uploadfiles[0].innerHTML;
						}
					}
					submiturl = 'Trouble/SubmitLandeskTrouble';
					submitdata = $scope.landeskData;
				}
				
				$http.post(SiteConfigs.SubSite + submiturl, {
						troubleFormData: submitdata
					})
					.success(function (data) {
						$scope.stoploading();
						if (data.code == "1") {

							var alertPopup = $ionicPopup.alert({
								title: '提示',
								template: '提交成功'
							});
							alertPopup.then(function (res) {
								console.log("确认提交成功");
								window.history.back();
								// $state.go('navigate');
								// self.location = "vipoa://close"
							});

						} else {
							$ionicPopup.alert({
								title: '提示',
								// template: data.msg
								template: '亲，系统被玩坏了，请稍后重试'
							});
							console.log(data.msg);
						}
						console.log(data);
						return;
					})
					.error(function (data, status, headers, config) {
						$scope.stoploading();
						$ionicPopup.alert({
							title: '提示',
							template: "网络不给力，请检查网络设置"
						});
						console.log(data);
					});
			}

		}
	])
	//邹贵初 Start
	.controller('TroubleList', function ($scope, $http, $state, $ionicPopup, $ionicLoading, backend) {
		//获取 当前用户信息
		$scope.currentUser = [];
		backend.getBackendInfo().then(function (data) {
			console.log(data);
			//data.CurrentUser.Department = "全国物流中心";
			$scope.currentUser = data.CurrentUser;
			if (data != null) {} else {
				// 查询不到 用户信息
				// loginout();
			}

		}, function (data) {
			// $scope.alert("提示", '登录超时，请重新登录');
			// loginout();
		});

		//弹出框
		$scope.alert = function (title, message) {
			return $ionicPopup.alert({
				title: title,
				template: message
			});
		}

		//mask 层
		$scope.showmask = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0
			});
		}
		// 数据声明
		$scope.historyListData = {
			hasmore: true,
			pageIndex: 0,
			pageSize: 10,
			object: []
		};
		//历史记录列表 start
		//下拉刷新
		$scope.doRefresh = function () {
			$scope.historyListData.pageIndex = 0;
			$scope.historyListData.hasmore = true;
			$http.get('/lapp/Trouble/GetMyTroubleList?pageIndex=' + $scope.historyListData.pageIndex + '&pageSize=' + $scope.historyListData.pageSize).success(function (response) {
				if (response.code === '1' && response.list.List.length > 0) {
					$scope.historyListData.object = response.list.List;
					$scope.historyListData.pageIndex++;
					if (response.list.List.length < $scope.historyListData.pageSize) {
						$scope.historyListData.hasmore = false;
					}
				} else {
					$scope.historyListData.hasmore = false;
				}
				$scope.$broadcast('scroll.refreshComplete');
			}).error(function (response) {
				var alertPopup = $ionicPopup.alert({
					title: '网络不给力，请检查网络设置'
				});
				alertPopup.then(function (res) {
					// $state.go('navigate');
					self.location = "vipoa://close";
				});
				// $scope.alert('网络不给力，请检查网络设置');
				// self.location = "vipoa://close";
			});
		};

		//上拉加载更多
		$scope.loadMore = function () {
			$scope.showmask();
			$http.get('/lapp/Trouble/GetMyTroubleList?pageIndex=' + $scope.historyListData.pageIndex + '&pageSize=' + $scope.historyListData.pageSize).success(function (response) {
				$ionicLoading.hide();
				if (response.code === '1' && response.list.List.length > 0) {
					$scope.historyListData.object = $scope.historyListData.object.concat(response.list.List);
					$scope.historyListData.pageIndex++;
					if (response.list.List.length < $scope.historyListData.pageSize) {
						$scope.historyListData.hasmore = false;
					}
				} else {
					$scope.historyListData.hasmore = false;
				}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}).error(function (response) {

				var alertPopup = $ionicPopup.alert({
					title: '网络不给力，请检查网络设置'
				});
				alertPopup.then(function (res) {
					// $state.go('navigate');
					self.location = "vipoa://close";
				});

				// $scope.alert('网络不给力，请检查网络设置');
				// self.location = "vipoa://close";
			});
		};
		//加载首次数据 
		// $scope.$on('$stateChangeSuccess', function () {
		$scope.loadMore();
		// });
		$scope.godetail = function (id,sourcetype) {
			$state.go('historyDetail', {
				troubleid: id,
				sourcetype :sourcetype
			});
		}
		//landesk 详情
		$scope.golandeskdetail = function (id,sourcetype) {
			$state.go('historyDetail', {
				troubleid: id,
				sourcetype :sourcetype
			});
		}

		//历史记录列表 end

	})
	.controller('TroubleDetail', function ($scope, $http, $ionicPopup, $stateParams, $ionicLoading, backend) {
		//获取 当前用户信息
		$scope.currentUser = [];
		backend.getBackendInfo().then(function (data) {
			console.log(data);
			//data.CurrentUser.Department = "全国物流中心";
			$scope.currentUser = data.CurrentUser;
			if (data != null) {} else {
				// 查询不到 用户信息
				// loginout();
			}

		}, function (data) {
			// $scope.alert("提示", '登录超时，请重新登录');
			// loginout();
		});
		//弹出框
		$scope.alert = function (title, message) {
			return $ionicPopup.alert({
				title: title,
				template: message
			});
		}
		var urladdress = '';
		//数据结构声明
		$scope.historyDetail = {};
		if($stateParams.sourcetype ==='0'){
			$scope.historyDetail.sourcetype = $stateParams.sourcetype;
			urladdress = '/lapp/Trouble/GetTroubleById?troubleid=';
		}
		if($stateParams.sourcetype ==='1'){
			$scope.historyDetail.sourcetype = $stateParams.sourcetype;
			urladdress = '/lapp/Trouble/GetLanDeskTroubleById?caseID=';
		}
		
		$http.get(urladdress + $stateParams.troubleid).success(function (response) {
			if (response.code === '1') {
				$scope.historyDetail = Object.assign($scope.historyDetail,response.data);
				//图片显示地址
				if ($scope.historyDetail.troubleimg) {
					$scope.historyDetail.troubleimg = window.location.origin + '/lapp/File/GetFile?path=' + $scope.historyDetail.troubleimg;
				}
			}
		}).error(function (response) {
			var alertPopup = $ionicPopup.alert({
				title: '网络不给力，请检查网络设置'
			});
			alertPopup.then(function (res) {
				// $state.go('navigate');
				self.location = "vipoa://close";
			});
			// $scope.alert('网络不给力，请检查网络设置');
			// $state.go('navigate');
			// self.location = "vipoa://close";
		});
	})
	.filter("jsonDate", function ($filter) {
		return function (input, format) {
			if (typeof (input) !== 'undefined') {
				var timestamp = Number(input.replace(/\/Date\((\d+)\)\//, "$1"));
			}
			return $filter("date")(timestamp, format);
		};
	});
//邹贵初 End

// 验证报障数据 
var CheckTroubleData = function ($scope) {
	var msg = "";
	if($scope.isnotLandesk){
		if ($scope.selectedLastSysType == "") {
			if ($scope.isShowChildren == true) {
				msg = "请选择分类";
				return msg;
			}
			msg = "请选择类别";
			return msg;
		}
		if ($scope.selectedTroubleType == null) {
			msg = "请选择问题类型";
			return msg;
		}
		if ($scope.selectedTypeProperty == null) {
			msg = "请选择具体问题";
			return msg;
		}
		if ($scope.selectedFirstArea == null && $scope.selectedSecondArea == null) {
			msg = "请选择区域";
			return msg;
		}
		if ($scope.selectedEffectArea == null) {
			msg = "请选择影响范围";
			return msg;
		}
	}else{
		if($scope.landeskData.TroubleDescription === ""){
			msg = "请填写故障/咨询描述";
			return msg;
		}
	}
	return msg;
}

// 获取表单数据
var GetFormData = function ($scope) {}