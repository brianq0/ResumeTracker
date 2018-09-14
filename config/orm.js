const connection = require('../config/connection.js');

const orm = {
    all: function (table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    },
    create: function (table, info, cb) {
        var queryString = `INSERT INTO ${table} (resName, resLiked) VALUES (?, ?)`;
        connection.query(queryString, info, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    },
    update: function (table, columnObj, id, cb) {
        var queryString = `UPDATE ${table} SET resLiked = ${columnObj.resLiked} WHERE id = ${id}`;
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    },
    delete: function (table, id, cb) {
        var queryString = `DELETE FROM ${table} WHERE id = ${id}`;
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    }


}

module.exports = orm;