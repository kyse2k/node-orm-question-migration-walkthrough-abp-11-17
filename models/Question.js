'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
    const sql = `
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY,
        content TEXT
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
