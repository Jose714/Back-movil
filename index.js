const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 5000
const mysql = require('mysql');

//configuracion base de datos
const db = mysql.createPool({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b39fc7edaf1a3d',
  password: 'ef57ae14',
  port: 3306,
  database: 'heroku_8c3b0b07f25d6e5'

})

//:@us-cdbr-east-02.cleardb.com/heroku_8c3b0b07f25d6e5?reconnect=true
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send("Bienvenidos")
});

app.get("/api/italiano", (req, res) => {

  const sqlSelect = "SELECT * FROM tipo_receta WHERE tipo = 'italiano'"
  db.query(sqlSelect, (err, result) => {
    res.send(result)

  })
});

app.get("/api/chino", (req, res) => {

  const sqlSelect = "SELECT * FROM tipo_receta WHERE tipo = 'chino'"
  db.query(sqlSelect, (err, result) => {
    res.send(result)

  })
});

app.get("/api/otras", (req, res) => {

  const sqlSelect = "SELECT * FROM tipo_receta WHERE tipo = 'otros'"
  db.query(sqlSelect, (err, result) => {
    res.send(result)

  });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})