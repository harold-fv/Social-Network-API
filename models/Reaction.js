const moment = require('moment');

// This will define Mongoose
const { Schema, Types } = require('mongoose');

//  This will define the shape of the documents within the collection.
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  
  module.exports = reactionSchema;