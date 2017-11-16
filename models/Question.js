'use strict';

const db = require("../config/db.js")

class Question{
  static CreateTable(){
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER
      )
    `
  console.log("Preparing to create the users table...")
  return new Promise(function(resolve){
      db.run(sql, function(){
        console.log("...users table created!")
        resolve("Success")
      })
    })
  }
}


module.exports = Question;
