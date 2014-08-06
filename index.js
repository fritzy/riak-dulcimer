var LevelBucketArray = require('level-bucketarray');
var levelout = require('levelout');
var riakdown = require('riakdown');
var RiakDownIndexTotal = require('riakdown-indextotal');
var LevelForeignKeys = require('level-foreignkeys');
var RiakDownIncrement = require('riakdown-increment');

function RiakDulcimer(uri, opts) {
    console.log("Connecting to", uri);
    return LevelForeignKeys(RiakDownIncrement(LevelBucketArray(RiakDownIndexTotal(levelout(uri, {db: require('riakdown'), valueEncoding: 'json'})))));
}

module.exports = RiakDulcimer;
