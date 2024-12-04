<<<<<<< HEAD
const express = require('express');
const articleRoutes = require('./routes/articleRoutes'); // Import article routes

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the article routes
app.use(articleRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
const express = require('express');
const articleRoutes = require('./routes/articleRoutes'); // Import article routes

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the article routes
app.use(articleRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> b4c1e402fb44016ef0e7eadc3c9e4750f32561a5
