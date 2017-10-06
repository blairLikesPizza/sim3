module.exports = {

    //this will create an entry in the friends table linking the two friends together
    createRelationship: function(req, res, next) {
        const db = app.get("db");
        const user1ID = req.user[0].id;
        const user2ID = req.body.user2;

        db.create_relationship([user1ID, user2ID])
        .then( res => {
            console.log(res);
            res.status(200).send(res)
        });
    },
    //this will remove the row from the friends column where the user1ID and user2ID match
    removeRelationship: function(req, res, next) {
        const db = app.get("db");
        const user1ID = req.user[0].id;
        const user2ID = req.body.user2;

        db.remove_relationship([user1ID, user2ID])
        .then( res => {
            console.log(res);
            res.status(200).send(res);
        })
    },
    //this will get all the friends of the currently logged in user
    getFriends: function(req, res, next) {
        const db = app.get("db");
        const user1ID = req.user[0].id;

        db.get_friends([user1ID])
        .then(friends => {
            res.status(200).send(friends)
        })
    }
}