/// <reference path="../lib/package_defs/meteor.d.ts" />
/// <reference path="../lib/package_defs/underscore.d.ts" />

// TODO: Only here to get TS compilation to pass.
declare var Factory, Fake;

Meteor.startup(function() {
  createMockMessages();
  createChannels();
});

function createMockMessages() {
  Factory.define('message', Messages, {
    text() { return Fake.sentence(); },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general'
  });

  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _.times(10, n => Factory.create('message'));
  }
}

function createChannels() {
  Channels.remove({});
  Channels.insert({name: 'general'});
  Channels.insert({name: 'random'});
}
