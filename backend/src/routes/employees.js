const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  const employees = db.prepare('SELECT * FROM employees').all();
  res.json(employees);
});

router.get('/:id', (req, res) => {
  const employee = db
    .prepare('SELECT * FROM employees WHERE id = ?')
    .get(req.params.id);
  res.json(employee);
});

router.post('/', (req, res) => {
  const { name, description, photo } = req.body;

  const result = db
    .prepare('INSERT INTO employees (name, description, photo) VALUES (?, ?, ?)')
    .run(name, description, photo);

  res.json({ id: result.lastInsertRowid });
});

module.exports = router;