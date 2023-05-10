
const express = require("express");
const stars = express.Router();
const {
    getAllstars,
    getOnestar,
    updateOnestar,
    deletestar,
    createstar,
} = require("../queries/stars");

stars.get("/", async (req, res) => {
  try {
    const stars = await getAllstars();
    res.json(stars);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "wait... something is wrong... where are ALL the stars...!" });
  }
});

stars.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const star = await getOnestar(id);
    res.json(star);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That star does not exist!" });
  }
});

stars.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const star = req.body;

    const updatedstar = await updateOnestar(id, star);
    res.json(updatedstar);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update that specific star data" });
  }
});

stars.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedstar = await deletestar(id);
    res.json(deletedstar);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Catastrophe! Something went terribly wrong!" });
  }
});

stars.post("/", async (req, res) => {
  try {
    const star = req.body;

    const createdstar = await createstar(star);
    res.json(createdstar);
} catch (error) {
    console.log(error);
    console.log("Incoming request body:", req.body);
    // res.status(400).json({ error: "Incorrect post body" });
    res.status(400).json({ error: "Incorrect post body" });

}
});

module.exports = stars;

