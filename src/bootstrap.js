module.exports = async () => {

  const Posts = require("./models/Posts");

  const errHandler = (err) => {
    console.log("Error: ", err);
  };

  const posts = await Posts.create({
    image: "",
    title: "testing",
    date: "wednesday",
    content: "testing testing",
    comment: ""
  }).catch(errHandler);
}

// const posts = await Posts.findAll({
//   where: { title: "testing" },
//   include: [{ model: Posts, as: "Posts" }] 
// }).catch(errHandler);
// console.log("testing Posts: ", JSON.stringify(posts));