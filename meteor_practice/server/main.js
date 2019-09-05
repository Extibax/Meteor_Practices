import { Meteor } from "meteor/meteor";

Meteor.methods({
  hello_world: function() {
    console.log("Hello Wolrd Function");
  }
});

Meteor.startup(() => {
  // code to run on server at startup
  console.log("Hello World");
});
