const express = require("express");
const router = express.Router();

const path = require("node:path");
const plansJSONFile = path.join(__dirname, "../data/plans.json");
const plans = require(plansJSONFile);
const PORT = process.env.PORT;
const helper = require("../helper/helper");

/**
 * Get all the videos with required keys
 */
router.get("/", (_req, res) => {
  try {
    const planList = plans.map((plan) => {
      return {
        id: plan.id,
        title: plan.title,
        image: `http://localhost:${PORT}/images/` + plan.image,
        vegetable: plan.vegetable,
        rice: plan.rice,
        roti: plan.roti,
        price: plan.price,
        dessert: plan.dessert,
      };
    });
    res.json(planList);
  } catch (error) {
    console.log("Error retrieving the plans, error");
  }
});

module.exports = router;
