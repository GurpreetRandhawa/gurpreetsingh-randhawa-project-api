const express = require("express");
const router = express.Router();

const path = require("node:path");
const foodsJSONFile = path.join(__dirname, "../data/foods.json");
const foods = require(foodsJSONFile);
const PORT = process.env.PORT;
const helper = require("../helper/helper");

/**
 * Get all the foods with required keys
 */
router.get("/", (_req, res) => {
  try {
    const foodList = foods.map((food) => {
      return {
        id: food.id,
        category: food.category,
        image: `http://localhost:${PORT}/images/` + food.image,
        name: food.name,
      };
    });
    res.json(foodList);
  } catch (error) {
    console.log("Error retrieving the foods, error");
  }
});

module.exports = router;
