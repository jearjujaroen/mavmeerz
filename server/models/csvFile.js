"use strict"
const Bookshelf = require('../db.js')


let File = Bookshelf.Model.extend({
  tableName: 'csv',
  hasTimestamps:true
});

exports.module = File;