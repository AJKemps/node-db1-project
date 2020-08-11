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

router.put("/:id", (req, res) => {
  let requestedAccount = req.params.id;
  let updatedAccount = req.body;

  db("accounts")
    .where({ id: requestedAccount })
    .update(updatedAccount)
    .then((response) => {
      if (response === 1) {
        res
          .status(200)
          .json({ message: "updated successfully", data: response });
      } else {
        res.status(404).json({ error: "record not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });

  // goes here
});

router.delete("/:id", (req, res) => {
  let requestedAccount = req.params.id;

  db("accounts")
    .where({ id: requestedAccount })
    .del()
    .then((response) => {
      if (response === 1) {
        res
          .status(200)
          .json({ message: "deleted successfully", data: response });
      } else {
        res.status(404).json({ error: "record not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
  // goes here
});

module.exports = router;
