const orm = require('../config/orm.js');

var resume = {
    all: function (cb) {
        orm.all("resumes", function (res) {
            cb(res);
        });
    },
    create: function (column, value, cb) {
        orm.create("resumes", value, function (res) {
            cb(res);
        });
    },
    update: function (column, condition, cb) {
        orm.update("resumes", column, condition, function (res) {
            cb(res);
        });
    },
    delete: function (id, cb) {
        orm.delete("resumes", id, function (res) {
            cb(res);
        })
    }
};

module.exports = resume;