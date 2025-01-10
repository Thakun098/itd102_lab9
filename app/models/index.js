const config = require('../config/db');

const dataType = require('sequelize');
const sequelize = new dataType( //นำไป connect กับฐานข้อมูล โดยใช้ sequelize ในการเชื่อมต่อ โดยใช้ค่าที่อยู่ในไฟล์ config/db.js
    config.DB, //ชื่อฐานข้อมูล
    config.USER, //ชื่อผู้ใช้
    config.PASSWORD, //รหัสผ่าน
    {
        host: config.HOST,  //host
        dialect: config.dialect //ชนิดของฐานข้อมูล
    }
);

const db = {}; //สร้าง object ชื่อ db

db.dataType = dataType; //เก็บค่า dataType ไว้ใน db.dataType
db.sequelize = sequelize; //เก็บค่า sequelize ไว้ใน db.sequelize

db.user = require("./user.model")(sequelize, dataType); //เรียกใช้งาน user.model โดยส่งค่า sequelize และ dataType ไป

module.exports = db; //ส่งค่า db ออกไปให้ไฟล์อื่นใช้งาน