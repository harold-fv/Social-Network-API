
// Import the required dependencies
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Set the server port, use environment variable PORT if available or default to 3001
const PORT = process.env.PORT || 3001;
const app = express();

// Set up the middleware for parsing incoming request bodies and for using imported routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Initialize the server once a successful database connection is established
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});