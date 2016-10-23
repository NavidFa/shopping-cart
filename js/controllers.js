app.controller("shoppingItem", function($scope, $http, $location) {
    $http.get("./templates/data.json")
        .then(function(data) {
            $scope.items = data.data
        })
    $scope.Range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    $scope.basket={}
    $scope.subtotal = 0
    $scope.addToCart = function(itemid, item, quantity) {
        if (!$scope.basket[itemid]) {
            $scope.basket[itemid] = 0
        }
        $scope.basket[itemid] += Number(quantity)
        $scope.subtotal += (item.price / 100) * Number(quantity)
        $scope.quantity = 1;
        $scope.iteminbag= Object.keys($scope.basket).length
        console.log($scope.basket[itemid]);
        console.log($scope.basket);
    }
    $scope.checkout= function(){
      console.log("cart");
    $location.path('/cart/')
}
});
