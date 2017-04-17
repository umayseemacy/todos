

if(Meteor.isClient) {

}

if(Meteor.isServer) {

}


Template.todos.helpers({
  'todo' : function(){
    return Todos.find();
  }
});
