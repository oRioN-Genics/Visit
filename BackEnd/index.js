const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/user.model.js');
const PORT = 5000;
const app = express()

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node API server....');
});


app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    // check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
  
    try {
      await newUser.save();
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (!user) {
      return res.status(400).json({ message: 'User not found. Please sign up.' });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password. Please try again.' });
    }
  
    res.status(200).json({ message: 'Signed in successfully!' });
  });

const dbURI = process.env.DB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log('Connected!');
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
  })
  .catch(err => console.log(err));
