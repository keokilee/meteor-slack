/// <reference path="../lib/package_defs/meteor.d.ts" />
/// <reference path="../lib/package_defs/node.d.ts" />

Meteor.startup(function() {
  var smtp = {
    username: encodeURIComponent(process.env.MAIL_USERNAME),
    password: encodeURIComponent(process.env.MAIL_PASSWORD),
    server: encodeURIComponent(process.env.MAIL_SERVER),
    port: process.env.MAIL_PORT || 587
  }

  process.env.MAIL_URL = `smtp://${smtp.username}:${smtp.password}@${smtp.server}:${smtp.port}`
});
