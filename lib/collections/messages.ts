/// <reference path="../../lib/package_defs/meteor.d.ts" />

interface MessagesDAO {
  _id?: string;
  timestamp: Date;
  user: string;
  text: string;
}

declare var Messages: Mongo.Collection<MessagesDAO>;
Messages = new Mongo.Collection<MessagesDAO>('messages');
