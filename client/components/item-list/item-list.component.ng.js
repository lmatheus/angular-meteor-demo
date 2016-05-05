angular.module('angular-meteor-boilerplate').component('itemList', {
    templateUrl: 'client/components/item-list/item-list.html',
    controller: function($reactive, $scope) {

        $reactive(this).attach($scope);

        this.subscribe("items");

        this.helpers({
          items(){
            return Items.find();
          }
        });

    }
});
