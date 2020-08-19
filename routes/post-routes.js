const db = require("../models");
const { Op } = require("sequelize");

module.exports = (app) => {
    //Temporary post route until we have more info  - verified via Postman
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

    //Temp route for get all UserPosts  - verified via Postman
    app.get("/api/posts", (req, res) => {
        db.UserPost.findAll({})
            .then((dbPost) => {
                res.json(dbPost);
            })
            .catch(err => {
                res.status(502).json(err);
            });
    });

    //Temp route to get one UserPost  - verified via Postman
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

    // Temp Tags Test - verified via Postman
    app.get("/api/post-tag/:postTags", (req, res) => {
        console.log(`The req.params = ${req.params.tag}`);
        db.UserPost.findAll({
            where: {
                postTags: {
                    [Op.like]: `%${req.params.postTags}%`
                }
            }
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(err => {
                res.status(502).json(err);
            });

    });

    // Temp Location Test - verified via Postman
    app.get("/api/post-location/:postLocation", (req, res) => {
        console.log(`The req.params = ${req.params.postLocation}`);
        db.UserPost.findAll({
            where: {
                postLocation: {
                    [Op.like]: `%${req.params.postLocation}%`
                }
            }
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(err => {
                res.status(502).json(err);
            });

    });

    // Global Search Route Test - verified via Postman
    app.get("/api/search/:terms", (req, res) => {
        console.log(`The req params = ${req.params}`);
        db.UserPost.findAll({
            where: {
                [Op.or]: [
                    { postLocation: { [Op.like]: `%${req.params.terms}%` } },
                    { postTitle: { [Op.like]: `%${req.params.terms}%` } },
                    { postTags: { [Op.like]: `%${req.params.terms}%` } },
                    { userRating: { [Op.like]: `%${req.params.terms}%` } }
                ]
            }
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(err => {
                res.status(502).json(err);
            });
    });

    //Temp delete post  - verified via Postman
    app.delete("/api/posts/:id", (req, res) => {
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