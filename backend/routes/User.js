const userRouter = require('express').Router();
const User = require('../models/Usermodel');
const Typing = require('../models/Typing');
const Candycrush = require('../models/Candycrush');
const Sudoku = require('../models/Sudoku');
const generateToken = require('../Utils.js');

userRouter.post('/signup', async (req, res) => {
  console.log('inside signup backend');
  try {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    const temp = await User.findOne({ email: email });
    if (temp) {
      res.status(404).send('User already exists');
    } else {
      const newUser = new User({
        name: name,
        password: password,
        email: email,
      });
      const user = await newUser.save();
      res.status(200).send({
        user: {
          name: user.name,
          password: user.password,
          email: user.email,
          token: generateToken(user),
        },
        message: 'Account created successfully',
      });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

userRouter.post('/signin', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (user) {
      if (user.password == password) {
        res.status(200).send({ user: user });
      } else {
        res.status(400).send('Wrong password');
      }
    } else {
      res.status(404).send('user not found');
    }
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
});

userRouter.get('/', async (req, res) => {
  try {
    const typegameDetail = await Typing.find();
    const candycrushgameDetail = await Candycrush.find();
    const sudokugameDetail = await Sudoku.find();
    res.status(200).send({
      typing: typegameDetail,
      candycrush: candycrushgameDetail,
      sudoku: sudokugameDetail,
    });
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
});

userRouter.post('/', async (req, res) => {
  try {
    const userId = req.body.userId;
    const game = req.body.gameId;
    const score = req.body.score;
    if (game == 1) {
      var typegameDetail = await Typing.findOne({ userId: userId });
      if (typegameDetail) {
        typegameDetail.gamecount = typegameDetail.gamecount + 1;
        typegameDetail.totalscore = typegameDetail.totalscore + score;
        if (score > typegameDetail.highscore) {
          typegameDetail.highscore = score;
        }
      } else {
        typegameDetail = new Typing({
          userId: userId,
          gamecount: 1,
          totalscore: score,
          highscore: score,
        });
      }
      await typegameDetail.save();
    } else if (game == 2) {
      var candycrushgameDetail = await Candycrush.findOne({ userId: userId });
      if (candycrushgameDetail) {
        candycrushgameDetail.gamecount = candycrushgameDetail.gamecount + 1;
        candycrushgameDetail.totalscore =
          candycrushgameDetail.totalscore + score;
        if (score > candycrushgameDetail.highscore) {
          candycrushgameDetail.highscore = score;
        }
      } else {
        candycrushgameDetail = new Candycrush({
          userId: userId,
          gamecount: 1,
          totalscore: score,
          highscore: score,
        });
      }
      await candycrushgameDetail.save();
    } else {
      const sudokugameDetail = await Sudoku.findOne({ userId: userId });
      if (sudokugameDetail) {
        sudokugameDetail.gamecount = sudokugameDetail.gamecount + 1;
        sudokugameDetail.totalscore = sudokugameDetail.totalscore + score;
        if (score > sudokugameDetail.highscore) {
          sudokugameDetail.highscore = score;
        }
      } else {
        sudokugameDetail = new Sudoku({
          userId: userId,
          gamecount: 1,
          totalscore: score,
          highscore: score,
        });
      }
      await sudokugameDetail.save();
    }

    res.status(200).send('Updated successfully');
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = userRouter;
