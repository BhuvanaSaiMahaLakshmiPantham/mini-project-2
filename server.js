const express = require("express");

const app = express();

app.use(express.json());

let farmers = [
  {
    id: 1,
    name: "Ramesh",
    crop: "Rice"
  },
  {
    id: 2,
    name: "Suresh",
    crop: "Cotton"
  }
];


// READ - Get all farmers
app.get("/farmers", (req, res) => {
  res.json(farmers);
});


// CREATE - Add farmer
app.post("/farmers", (req, res) => {

  const newFarmer = req.body;

  farmers.push(newFarmer);

  res.json({
    message: "Farmer Added Successfully",
    data: newFarmer
  });

});


// UPDATE - Update farmer
app.put("/farmers/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const farmer = farmers.find(f => f.id === id);

  if (farmer) {

    farmer.name = req.body.name;
    farmer.crop = req.body.crop;

    res.json({
      message: "Farmer Updated Successfully",
      data: farmer
    });

  } else {

    res.status(404).json({
      message: "Farmer Not Found"
    });

  }

});


// DELETE - Delete farmer
app.delete("/farmers/:id", (req, res) => {

  const id = parseInt(req.params.id);

  farmers = farmers.filter(f => f.id !== id);

  res.json({
    message: "Farmer Deleted Successfully"
  });

});


app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});