const mongoose = require('mongoose');

const Typingschema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    gamecount: {
      type: Number,
      required: true,
      default: 0,
    },
    totalscore: {
      type: Number,
      required: true,
      default: 0,
    },
    highscore: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Typing', Typingschema);
