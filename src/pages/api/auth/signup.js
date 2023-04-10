import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import dbConnect from '../../../utils/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { username, password } = req.body;
  if (
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await dbConnect();

  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    return;
  }

  const newUser = new User({
    username,
    password: bcryptjs.hashSync(password),
    isAdmin: true,
  });

  const user = await newUser.save();
//   await db.disconnect();
  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    name: user.username,
    isAdmin: user.isAdmin,
  });
}

export default handler;