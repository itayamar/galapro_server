const usersDb = require('./db_ctrl');

exports.addUser = (req, res, next) => {
    let username = req.body.username;
    let value = req.body.value;
    let message = req.body.message;
    let user = {name: username, value: value, message};

    return usersDb.addUser(user, (err)=>{
        if (err) return res.send(err);
        return res.send('ok');
    });
};

exports.getUsers = (req, res, next) => {
    return usersDb.getUsers((err, users)=> {
        if (err) return res.send(err);
        return res.send(users);
    });
};
