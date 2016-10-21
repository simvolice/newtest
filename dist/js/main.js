var app = angular.module('BlankApp', ['ngMaterial', 'ngMessages', 'ngResource']);


app.config(['$resourceProvider', function ($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);


app.controller('MainCtrl', function ($resource, $mdToast) {


    var vm = this;


    vm.data = {


        search: '',


        clientPhone: '',

        groupSearch: 0


    };


    /*
     Для отправки на демо сервер
     */
    vm.submitForm = function () {



       

        var DemoSendPost = $resource('/demo/requestdata');


        DemoSendPost.save({demoData: vm.data}, function (response) {


            vm.showSimpleToast(response);


        });


    };


    /*
     Показываем тост
     */
    vm.showSimpleToast = function (text) {


        $mdToast.show(
            $mdToast.simple()
                .textContent(text)
                .position('left bottom')
                .hideDelay(3000)
        );
    };


});
