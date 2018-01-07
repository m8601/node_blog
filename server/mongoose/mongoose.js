const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blog');  // w todo_api z kursu jest konfiguracja na heroku i lokalnie, pozniej to zrobie, jak bede robic dodawanie postow/komentarzy

module.exports = { mongoose };
