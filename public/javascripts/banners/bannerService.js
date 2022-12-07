//导入MySQL 模块
const mysql = require('mysql');
//导入配置文件
const db = require('../../conf/mysqlConfig');
var commonService = require('../common/CommonService')

function querylist(req, res){
    //创建数据库连接对象
    let conn = mysql.createConnection(db);
    //查询bookinfo中所有数据
    conn.query('select * from banner',(err,results,fields)=>commonService.handleMysqlResult(res,err,results,fields));
    //关闭数据库链接
    conn.end((err)=>{
        if(err){
            console.log(err);
        }    
    });
}


module.exports = {querylist}