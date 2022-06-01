const express = require("express");
const app = express();
const cors = require('cors');
const mysql2 = require('mysql2');

// port 4000でサーバ立ち上げ
const server = app.listen(4000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.disable('x-powered-by');
app.use(cors()).use(express.json());

// mysqlに接続
const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'user',
  password: 'password',
  database: 'sample_database',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected mysql');
});

// todoすべてを取得する
// app.get("/api/todos", (req, res, next) => {
//   const sql = 'select * from todos';
//   connection.execute(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// todo1件を取得する
// app.get("/api/todos/:id", (req, res, next) => {
//   const id = req.params.id;
//   const sql = 'select * from todos where ?';
//   connection.query(sql, { id: id }, (err, results) => {
//     if (err) throw err;
//     res.json(results[0]);
//   });
// });

// // todo1件を作成する
// app.post("/api/todos", (req, res, next) => {
//   const todo = req.body;
//   const sql = 'insert into todos set ?';
//   connection.query(sql, todo, (err, result) => {
//     if (err) throw err;
//     res.status(201).json(result.id);
//   });
// });

// todoすべてを取得する
app.get("/api/todos", (req, res, next) => {
  const sql = 'select * from todos';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// todo1件を作成する
app.post("/api/todos", (req, res, next) => {
  const todo = req.body;
  const sql = 'insert into todos set ?';
  connection.query(sql, todo, (err, result) => {
    if (err) throw err;
    res.status(201).json(result.id);
  });
});

// todo1件を取得する
app.get("/api/todos/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = 'select * from todos where ?';
  connection.query(sql, { id: id }, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// todo1件を更新する
app.put("/api/todos/:id", (req, res, next) => {
  const id = req.params.id;
  const todo = req.body;
  const sql = 'update todos set ? where ?';
  connection.query(sql, [todo, { id: id }], (err, result) => {
    if (err) throw err;
    res.status(200).send();
  });
});

// todo1件を削除する
app.delete("/api/todos/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = 'delete from todos where ?';
  connection.query(sql, { id: id }, (err, result) => {
    if (err) throw err;
    res.status(200).send();
  });
});

//results[0]配列を取る理由:1件しかないのであれば、配列を除く大人の事情がある

// getのapi
// app.delete("/api/hello", (req, res, next) => {
//   res.send("delete");
// });

// jsonが返ってくるapi
// app.get("/api/json", (req, res, next) => {
//   res.json({
//     db1: "mysql",
//     db2: "postgres",
//     db3: "oracle"
//   })
// });

// app.get("/api/hello", (req, res, next) => {
//   res.send("Hello World! Hellow America!");
// });