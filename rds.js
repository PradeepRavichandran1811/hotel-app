var mysql = require('mysql');


var rdsUrl = 'hotel-app-database.cluster-cjlegpje5r73.us-east-2.rds.amazonaws.com';
var password =  'apprunner';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
