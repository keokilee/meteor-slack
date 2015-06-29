/// <reference path="../lib/package_defs/meteor.d.ts" />

Meteor.subscribe('allUsernames');
Meteor.subscribe('channels');

Messages.allow({
  insert(userId, doc) {
    return userId && (doc.user === userId);
  }
})

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template['messages'].helpers({
  messages: Messages.find({})
});

Template['messages'].onCreated(function() {
  this.autorun(() => this.subscribe('messages', Session.get('channel')));
});

Template['listings'].helpers({
  channels: Channels.find()
});

Template['channel'].helpers({
  active() {
    if (Session.get('channel') === this.name) {
      return 'active';
    }

    return '';
  }
})
