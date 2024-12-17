const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 27017;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const server = http.createServer(app);
const io = new Server(server);

//const PokerEngine = require('./poker-engine/Game'); // Assuming the provided JS poker logic

mongoose.connect('mongodb+srv://ikodane:@Burntheworld99@sweet-poker-io.ovuot.mongodb.net/');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB !!');
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email:  {
    type: String,
    required: true
  },
  md5:  {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  chips: {
    type: Number,
    required: true
  }}, { timestamps: true }
);

const User = mongoose.model('User', userSchema)

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Compare password with hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Respond with user info (omit sensitive data)
      const { password: _, ...userInfo } = user.toObject();
      res.json({
          message: 'Login successful',
          user: userInfo
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
});

app.post('/sign-up', async (req, res) => {
  const { username, email, password, balance, chips } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      balance,
      chips
    });

    // Save the user to the database
    await user.save();

    // Respond with the created user (excluding the password)
    const { password: _, ...userInfo } = user.toObject();
    res.status(201).json({
      message: 'User created successfully',
      user: userInfo
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// let pokerGame = new PokerEngine();

// // Socket.IO for real-time communication
// io.on('connection', (socket) => {
//   console.log('Player connected:', socket.id);

//   // On player joining the game
//   socket.on('joinTable', (playerData) => {
//     pokerGame.addPlayer(playerData);
//     io.emit('updatePlayers', pokerGame.getPlayers());
//   });

//   // Start new round when two or more players are at the table
//   if (pokerGame.players.length >= 2) {
//     startNewHand();
//   }

//   // Handle betting actions
//   socket.on('placeBet', (betData) => {
//     pokerGame.placeBet(betData);
//     io.emit('updateBets', pokerGame.getCurrentBets());
    
//     io.emit('updateChips', {
//         playerId,
//         chips: player.chips,
//         currentBets: pokerGame.getCurrentBets()
//       });
//   });


//   // End the hand
//   socket.on('endHand', () => {
//     pokerGame.endHand();
//     io.emit('endHand', pokerGame.getHandResults());
//   });

//   socket.on('disconnect', () => {
//     console.log('Player disconnected:', socket.id);
//   });
// });

// // Start new hand function
// function startNewHand() {
//   pokerGame.startNewHand();
//   io.emit('newHand', pokerGame.getCommunityCards());
//   io.emit('updatePlayers', pokerGame.getPlayers());
// }

// // Handle the different stages of the game
// function handleRounds() {
//   // Preflop
//   io.emit('startPreflop', pokerGame.dealPreflop());

//   // Flop
//   setTimeout(() => {
//     io.emit('startFlop', pokerGame.dealFlop());
//   }, 15000); // Add delays between rounds as needed

//   // Turn
//   setTimeout(() => {
//     io.emit('startTurn', pokerGame.dealTurn());
//   }, 30000);

//   // River
//   setTimeout(() => {
//     io.emit('startRiver', pokerGame.dealRiver());
//   }, 45000);
// }

// server.listen(5000, () => {
//   console.log('Server listening on port 5000');
// });
