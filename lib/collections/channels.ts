/// <reference path="../../lib/package_defs/meteor.d.ts" />

interface ChannelDAO {
  _id?: string;
  name: string;
}

declare var Channels: Mongo.Collection<ChannelDAO>;
Channels = new Mongo.Collection<ChannelDAO>('channels');
