function handleMysqlResult(res,err,results,fieldes){
    //fieldes表示具体的字段
    if(err){
        res.json({
            code: 500,
            msg: "fail",
            err
        })
    }else{
        res.json({
            code: 200,
            msg: "OK",
            data: results // 查询结果
        })
    }
}

module.exports = {handleMysqlResult}