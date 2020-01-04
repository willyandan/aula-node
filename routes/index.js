var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: req.query.title || "OLA MUNDO"
  });
});

/** GET all users */
router.get("/user", async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const users = response.data;
    res.render("users", {
      users: users
    });
  } catch (error) {
    next(error);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${req.params.id}`
    );
    const user = response.data;
    res.render("user", {
      user
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
