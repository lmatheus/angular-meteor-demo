Meteor.methods({
  newItem: function(item) {
      return Items.insert(item);
  },
  deleteItem: function(id) {
      return Items.remove(id)
  }
});
