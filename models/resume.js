const orm = require('../config/orm.js');

var resume = {
    all: function (cb) {
        orm.all("resumes", function (res) {
            cb(res);
        });
    },
    create: function (value, cb) {
        orm.create("resumes", value, function (res) {
            cb(res);
        });
    },
    update: function (columnObj, id, cb) {
        orm.update("resumes", id, columnObj, function (res) {
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