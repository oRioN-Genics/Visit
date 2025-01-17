require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require("jsonwebtoken"); 
const User = require('./models/user.model.js');
const TravelPlan = require('./models/travelPlan.model');
const PORT = 5000;
const app = express()

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node API server....');
});


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user; 
    next();
  });
};


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
  
    try {
        const user = await User.findOne({ username });
  
        if (!user) {
            return res.status(400).json({ message: 'User not found. Please sign up.' });
        }

        if (user.banned) {
            return res.status(403).json({ message: 'Your account has been banned. Please contact support.' });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password. Please try again.' });
        }
  
        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });
        res.status(200).json({ 
            message: 'Signed in successfully!',
            token,
            username: user.username,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


  
  app.post('/api/travelPlans', authenticateToken, async (req, res) => {
    try {
      const { trip, userSelection } = req.body;
      const userId = req.user.id; // extract userID from the token
  
      if (!trip || !userSelection) {
        return res.status(400).json({ message: "Trip and user selection are required" });
      }
  
      const newTravelPlan = new TravelPlan({
        userId,
        trip,
        userSelection,
      });
  
      await newTravelPlan.save();
      res.status(200).json({ message: "Trip saved successfully!",
                            _id: newTravelPlan._id
       });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving the trip" });
    }
  });

  
  app.get('/view_trip/:tripID', async (req, res) => {
    const tripID = req.params.tripID;
    const trip = await TravelPlan.findById(tripID);
  
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
  
    res.status(200).json(trip);
  });


  app.get('/api/users-with-travel-plans', async (req, res) => {
    try {
      const users = await User.find({}, 'username email access_status'); 
      const userTravelPlans = await Promise.all(
        users.map(async (user) => {
          const travelPlans = await TravelPlan.find({ userId: user._id });
          return {
            username: user.username,
            email: user.email,
            access_status: user.access_status,
            travelPlans,
          };
        })
      );
  
      res.status(200).json(userTravelPlans);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching users and their travel plans" });
    }
  });


  app.delete('/api/travelPlans/:tripID', async (req, res) => {
    const tripID = req.params.tripID;
  
    try {
      const travelPlan = await TravelPlan.findByIdAndDelete(tripID);
  
      if (!travelPlan) {
        return res.status(404).json({ message: "Travel plan not found" });
      }
  
      res.status(200).json({ message: "Travel plan deleted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting the travel plan" });
    }
  });


  app.post('/api/users/:userID/toggle-ban', async (req, res) => {
    const userID = req.params.userID;

    try {
        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // user.banned = !user.banned;
        if (user.access_status == "Active") {
          user.access_status = "Banned"    // user is banned
        } else {
          user.access_status = "Active"    // user is not banned
        }

        await user.save();

        res.status(200).json({ 
            message: `User ban status updated to ${user.banned ? 'banned' : 'unbanned'}.`,
            banned: user.access_status,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating the user's ban status" });
    }
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
