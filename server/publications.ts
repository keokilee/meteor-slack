/// <reference path="../lib/package_defs/meteor.d.ts" />

Meteor.publish('messages', channel => Messages.find({channel: channel}));
Meteor.publish('channels', () => Channels.find());

Meteor.publish('allUsernames', () => {
  return Meteor.users.find({}, {fields: {
    'username': 1,
    'services.github.username': 1
  }});
});
