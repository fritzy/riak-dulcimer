var LevelBucketArray = require('level-bucketarray');
var levelup = require('levelup');
var riakdown = require('riakdown');

function RiakDulcimer(uri, opts) {
    return LevelBucketArray(levelup(riakdown(uri, opts)));
}

module.exports = RiakDulcimer;
