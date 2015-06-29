/// <reference path="../lib/package_defs/meteor.d.ts" />

Template.registerHelper('usernameFromId', userId => {
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === 'undefined') {
    return 'Anonymous';
  }

  if (typeof user.services.github !== 'undefined') {
    return user.services.github.username;
  }

  return user.username;
});

Template.registerHelper('timestampToTime', timestamp => {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = `0${date.getMinutes()}`;
  minutes = minutes.substr(minutes.length - 2);

  var seconds = `0${date.getSeconds()}`;
  seconds = seconds.substr(seconds.length - 2);

  return `${hours}:${minutes}:${seconds}`;
});
