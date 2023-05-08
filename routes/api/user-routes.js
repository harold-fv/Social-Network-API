const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Set up a DELETE route for the endpoint /api/users/:userId
router.route('/:userId').delete(async (req, res) => {
  try {

    // Find the user by ID from the request parameters
    const user = await User.findById(req.params.userId);

    // If the user is not found, return a 404 status with a 'User not found' message
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Call the 'remove()' method on the user instance to delete the user
    await user.remove();

    // Send a JSON response with a message confirming the user and associated thoughts were removed
    res.json({ message: 'User and associated thoughts removed' });
  } catch (error) {

    // In case of any errors, send a 500 status along with the error object
    res.status(500).json(error);
  }
});




// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;