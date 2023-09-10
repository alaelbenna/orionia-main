const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes')
// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create the Express app
const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.options('*', cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, dash!');
  });
  
  app.use('/api/users', userRoutes);



// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});