const Database = require('better-sqlite3');

const db = new Database('db/database.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    photo TEXT
  )
`).run();

const count = db.prepare('SELECT COUNT(*) as count FROM employees').get();

if (count.count === 0) {
  const insert = db.prepare(`
    INSERT INTO employees (name, description, photo)
    VALUES (?, ?, ?)
  `);

  insert.run(
    'Eetu Testaaja',
    'Test Description 1',
    'uploads/employees/eetu.jpg'
  );
  insert.run(
    'Joona Testaaja',
    'Test Description 2',
    'uploads/employees/joona.jpg'
  );
}

module.exports = db;