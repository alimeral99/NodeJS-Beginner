const path = require("path");

const express = require("express");

const shopControllers = require("../controllers/shop");
const router = express.Router();

router.get("/", shopControllers.getIndexPage);

router.get("/products", shopControllers.getProducts);

router.get("/cart", shopControllers.getCart);

router.get("/orders", shopControllers.getOrders);

router.get("/checkout", shopControllers.getCheckOut);

module.exports = router;
