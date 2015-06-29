/// <reference path="../lib/package_defs/meteor.d.ts" />

Meteor.methods({
  newMessage(message) {
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);
  }
})
