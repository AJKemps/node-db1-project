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
  requestedAccount = req.params.id;

  db.select("*")
    .from("accounts")
    .where({ id: requestedAccount })
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });

  // goes here
});

router.post("/", (req, res) => {
  let newAccount = req.body;

  db("accounts")
    .insert(newAccount)
    .returning("id")
    .then((response) => {
      res.status(201).json({ data: response });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
  // goes here
});

router.put(":/id", (req, res) => {
  // goes here
});

router.delete(":/id", (req, res) => {
  // goes here
});

module.exports = router;
