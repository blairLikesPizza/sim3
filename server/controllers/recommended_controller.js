module.exports = {
    getRecommended: function(req, res, next) {
       const db = app.get("db");
       const user1ID = req.user[0].id

       db.get_recommended([user1ID])
       .then( recFriends => {
           res.status(200).send(recFriends);
       });
    },
}