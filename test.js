var levelup = require('levelup');
var riakdown = require('riakdown');
var concat = require('concat-stream');

var db = levelup('riak://localhost:8087/default', {db: riakdown, valueEncoding: 'json'});

db.put('testkey', '{"name": "ham"}', {indexes: [{key: 'name_bin', value: 'ham'}], bucket: 'default'}, function (err, extra) {
    db.createReadStream({
        index: 'name_bin',
        start: 'ham',
        end: 'ham',
        bucket: 'default'
    }).pipe(concat(function (results) {
        db.put('testkey', '{"name": "salami"}', {indexes: [{key: 'name_bin', value: 'salami'}], bucket: 'default', vclock: extra.vclock}, function (err) {
            db.createReadStream({
                index: 'name_bin',
                start: 'ham',
                end: 'ham',
                bucket: 'default'
            }).pipe(concat(function (results2) {
            }));
        });
    }));
});
