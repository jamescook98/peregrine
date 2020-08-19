const db = require("../models");
const { Op } = require("sequelize");

module.exports = (app) => {
    //Temporary post route until we have more info
    app.post("/api/user-post", (req, res) => {
        db.UserPost.create({
            postLocation: req.body.postLocation,
            postTitle: req.body.postTitle,
            postBody: req.body.postBody,
            postTags: req.body.postTags,
            userRating: req.body.userRating,
            imgFilepath: req.body.imgFilepath
        })
            .then((post) => {
                res.json(post);
            })
            .catch(err => {
                res.status(401).json(err);
            });
    });

    //Temp route for get all UserPosts
    app.get("/api/posts", (req, res) => {
        db.UserPost.findAll({})
            .then((dbPost) => {
                res.json(dbPost);
            })
            .catch(err => {
                res.status(502).json(err);
            });
    });

    //Temp route to get one UserPost
    app.get("/api/posts/:id", (req, res) => {
        db.UserPost.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        })
            .then((dbPost) => {
                res.json(dbPost);
            })
            .catch(err => {
                res.status(502).json(err);
            });
    });

    //Temp delete post
    app.delete("/api/posts/:id", function (req, res) {
        db.UserPost.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
                console.log("Deleted successfully");
            })
            .catch(err => {
                res.status(401).json(err);
            });
    });

};