const low = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
// Set some defaults
db.defaults({ users: []}).write();

exports.addUser = (user, cb) =>{
    db.get('users')
        .push(user)
        .write();
    return cb();
};

exports.getUsers = (cb) => {
    cb(null, db.get('users').value());
};
