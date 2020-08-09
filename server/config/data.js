/*const { createPool } = require("mysql");

const pool = createPool({
  //port: 3306,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB
});

module.exports = pool;*/

var users = {'1':{"id":1, "name":"김영렬"},'2':{"id":2, "name":"장임호"}}
var userImage = [{"userid": 1, "image": "https://previews.123rf.com/images/primeproud/primeproud1201/primeproud120100106/11875885-새로운-종이-시트와-비어있는-.jpg"}, {"userid": 2, "image": "https://previews.123rf.com/images/primeproud/primeproud1201/primeproud120100106/11875885-새로운-종이-시트와-비어있는-.jpg"}]
var chatArr = [{"id": 1, "userid": 1, "chat": "안녕하세요", "mind": "신뢰"},{"id": 2, "userid": 2, "chat": "만나서 반가워요!", "mind": "기쁨"}]

const DataArray = {
  users: users,
  userImage: userImage,
  chatArr: chatArr,
};

module.exports =  { DataArray };