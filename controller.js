var app = angular.module('shopping', []);
app.controller('shopCtrl', function($scope,$http) {
    $scope.selectedItems=[];
    $scope.qty=0;
    $scope.totalProdAmount=0;
    
    $http.get("http://private-32dcc-products72.apiary-mock.com/product")
    .then(function(response) {
        $scope.productDetails = response.data;
    });
    
    $scope.addToCart=function(idx){
        $scope.qty=1;
        $scope.selectedItems.push($scope.productDetails[idx]);
        $scope.totalProdAmount=$scope.totalProdAmount+$scope.selectedItems[idx].price;
    }
    $scope.removeProd = function(index) {
        $scope.selectedItems.splice(index,1);
      };
});