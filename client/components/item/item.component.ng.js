angular.module('angular-meteor-boilerplate').component('item', {
    templateUrl: 'client/components/item/item.html',
    bindings: {
        item: '<'
    },
    controller: function($reactive, $scope) {

      $reactive(this).attach($scope);

      this.deleteItem = (id) => {
        this.call("deleteItem", id, function(error, result){
          if(error){
            console.log("error", error);
          }
          if(result){
            console.log("item deleted");
          }
        });
      }

      this.editItem = (item) => {
        this.call("editItem", item, function(error, result){
          if(error){
            console.log("error", error);
          }
          if(result){
            console.log("item updated", result);
          }
        });
      }

    }
});
