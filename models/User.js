// This will define Mongoose

const { Schema, model } = require('mongoose');


//  This will define the shape of the documents within the collection.
const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  // Create a virtual property `friendCount` that gets the amount of friends
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
// Add a 'pre' hook on the 'remove' event for the userSchema
  userSchema.pre('remove', async function(next) {
    try {
      // Before removing the user, find and delete all thoughts where the 'username' field matches the user's username
      await Thought.deleteMany({ username: this.username });

      // Call the next middleware or function in the pipeline
      next();
    } catch (error) {

      // If there's an error, call the next function with the error object
      next(error);
    }
  });
  
    // userSchema is the name of the schema we are using to create a new instance of the model
  const User = model('User', userSchema);
  
  module.exports = User;