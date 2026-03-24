const express = require('express');
const cors = require('cors');
const employeesRoute = require('./routes/employees');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use('/api/employees', employeesRoute);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});