var LevelBucketArray = require('level-bucketarray');
var levelup = require('levelup');
var riakdown = require('riakdown');
var RiakDownIndexTotal = require('riakdown-indextotal');

function RiakDulcimer(uri, opts) {
    console.log("Connecting to", uri);
    return LevelBucketArray(RiakDownIndexTotal(levelup(uri, {db: require('riakdown'), valueEncoding: 'json'})));
}

module.exports = RiakDulcimer;
