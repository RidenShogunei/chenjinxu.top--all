const fs = require('fs');
const mysql = require('mysql');

const conn = mysql.createConnection({
  user:'blog',          
  password:'chen2003',  
  host:'47.96.160.149',     
  database:'second'     
});

conn.connect(err => {
  if (err) {
    console.error(err, '如果不为null，则连接失败');
  } else {
    console.log('数据库连接成功');
    insertDataFromFile(conn);
  }
});

function insertDataFromFile(conn) {
  // 读取json文件
  fs.readFile('data3.json', 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // 解析 JSON
      const jsonData = JSON.parse(data);
  
      // 获取对象的所有值
      const values = Object.values(jsonData);
      let id=1;
      // 对 values 进行处理，插入到数据库中
      values.forEach(value => {
        let query = "INSERT INTO genshin (sentence, language) VALUES (?, 'english')";
  
        // 执行 SQL query
        conn.query(query, value, (err, res) => {
          if(err) {
            console.log("无法插入数据: ", err);
          } else {
            console.log(`Inserted data with ID: ${id}`);
            id++;
          }
        });
      });

      console.log('数据插入完成');
    }
  });
}