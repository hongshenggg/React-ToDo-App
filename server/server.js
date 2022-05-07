const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/todos', require('./routes/todoRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
