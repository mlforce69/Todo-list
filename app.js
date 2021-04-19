const express = require("express");
const date = require(__dirname + "/date.js")

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  
  let day = date.getDate();


  res.render("list", {
    kindOfDay: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

// app.get("/work", function (req, res) {
//   res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

// app.post("/work", function (req, res) {
//   let item = req.body.newItem;

//   workItems.push(item);

//   res.redirect("/work");
// });

app.get("/about", function (req, res){
  res.render("about");
})


app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
