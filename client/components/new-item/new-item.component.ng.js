angular.module('angular-meteor-boilerplate').component('newItem', {
    templateUrl: 'client/components/new-item/new-item.html',
    controller: function($reactive, $scope) {

        $reactive(this).attach($scope);

        this.item = {};

        this.newItem = (item) => {
            this.call("newItem", item, (error, result) => {
                if (error) {
                    console.log("error", error);
                }
                if (result) {
                    console.log("item added", result);
                    this.item = {};
                }
            });
        }
    }
});
