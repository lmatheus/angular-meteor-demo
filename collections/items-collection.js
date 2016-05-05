Items = new Mongo.Collection("items");

Items.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});

ItemSchema = new SimpleSchema({
  name:{
    type: String
  },
  description:{
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  }
});

Items.attachSchema(ItemSchema);
