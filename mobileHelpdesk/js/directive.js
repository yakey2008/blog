(function () {

    angular.module('starter.directives', [])

.directive('autoheight', function() {
	return {
		restrict: 'A',
		link: function(scope, element) {
			var resize = function() {
				element[0].style.height = "" + element[0].scrollHeight + "px";
			};
			scope.$watch('ngModel',function(){
				resize();
			})
		}
	};
})
    //.directive('focusMe', ["$timeout", function ($timeout) {
    //    return {
    //        link: function (scope, element, attrs) {
    //            $timeout(function () {
    //                element[0].focus();
    //            }, 150);
    //        }
    //    };
    //}])

    //.directive('autofocus', ["autofocus", function ($timeout) {
    //    return {
    //        scope: {
    //            focusValue: "=autofocus"
    //        },
    //        link: function (scope, element, attrs) {
    //            console.log("autofocus directiveinit " + scope.focusValue);
    //            if (scope.focusValue) {
    //                $timeout(function () {
    //                    console.log(" adding focus to element")
    //                    element[0].focus();
    //                });
    //            }
    //        }
    //    };
    //}])

    ;

    //// 创建"selectLeaveButton"指令 
    //.directive("selectLeaveButton", function () {
    //    return {
    //        restrict: "AE", // 指令是一个元素 (并非属性) 
    //        scope: { // 设置指令对于的scope 
    //            // name 值传递 （字符串，单向绑定） 
    //            name: "@" // name 引用传递（双向绑定） 
    //        },
    //        template: // 替换HTML (使用scope中的变量) 
    //			"<a class='button button-plain col'>{{name}}</a>",
    //        replace: true, // 使用模板替换原始标记 
    //        transclude: false
    //    }
    //})


    //.directive('fileUpload', function () {
    //    return {
    //        scope: true,        //create a new scope
    //        link: function (scope, el, attrs) {
    //            el.bind('change', function (event) {
    //                var files = event.target.files;
    //                //iterate files since 'multiple' may be specified on the element
    //                for (var i = 0; i < files.length; i++) {
    //                    //emit event upward
    //                    scope.$emit("fileSelected", { file: files[i] });
    //                }
    //            });
    //        }
    //    };
    //});

})();