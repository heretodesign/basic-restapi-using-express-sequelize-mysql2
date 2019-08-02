const express = require("express");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const cors = require('cors');

const {Posts} = require('sequelize');

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Connection
require("./src/database/connection");
require("./src/bootstrap")();

sequelize.authenticate()
  .then(() => console.log("Database Connected"))
  .catch(err => console.log("Error: " + err))

app.get("/api/posts", (req, res) => {
  Posts.findAll().then((posts) => {
      res.json(posts);
  })
})

app.post("/api/posts", (req, res) => {
  console.log(req.body);
  Posts.create({
    image: req.body.image,
    title: req.body.title,
    date: req.body.date,
    content: req.body.content,
    comment: req.body.comment
  }).then(posts => {
    res.send("POST Created!!")
  })
})

app.get("/api/posts/:id", (req, res) => {
  Posts.findOne({
  where: {title: 'aProject'},
  attributes: ['id', ['name', 'title']]
  }).then(posts => {
    // project will be the first entry of the Projects table with the title 'aProject' || null
    // project.get('title') will contain the name of the project
  })
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
