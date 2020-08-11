const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

router.get("/:id", (req, res) => {
  // goes here
});

router.post("/", (req, res) => {
  // goes here
});

router.put(":/id", (req, res) => {
  // goes here
});

router.delete(":/id", (req, res) => {
  // goes here
});

module.exports = router;
