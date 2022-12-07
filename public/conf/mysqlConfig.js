var mysqlConfig = {
    host: "192.168.9.105",//这是数据库的地址
    user: "root",//需要用户的名字
    password: "12345678",//用户密码 ，如果你没有密码，直接双引号就是
    database: "vikkitest",//数据库名字
    port:3306//数据库使用的端口号
}
module.exports = mysqlConfig;//用module.exports暴露出这个接口