 var MongoClient = require('mongodb').MongoClient;
 var DB_CONN_STR = 'mongodb://localhost:27017/cwf1';

 //查询数据
var selectData = function(db, callback){
    var collection = db.collection('col');
    var whereStr = {name:"菜鸟教程"};
    collection.find(whereStr).toArray(function(err, result) {
        if(err){
            console.log(err);
            return;
        }
        callback(result);
    })
}
function selectd(req, res, next){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");

        selectData(db, function(result) {
            console.log(result);
            res.send({data: result})
            db.close();
        })
    })
}


module.exports =  {
    selectd : selectd
}