const { AuthenticationError } = require('apollo-server-express');
const { User, Fountain } = require('../models');
const { signToken } = require('../utils/auth');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

const resolvers = {
  Query: {
    // GETs all users and their uploaded fountains
    users: async () => {
      return await User.find().populate('fountains');
    },
    // GETs all fountains from database
    fountains: async () => {
      return await Fountain.find();
    },
    // GETs context user and uploaded fountains
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user_id }).populate('fountains');
      }
      throw new AuthenticationError('You need to be logged in');
    },
  },

  Mutation: {
    // POSTs new User
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // assigns token to logged in user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    // POSTs new Fountain
    addFountain: async (parent, { address, img, lat, lng, address, place, city, state, postAuthor }, context) => {
      if (context.user) {
        const fountain = await Fountain.create({
          lat,
          lng,
          address,
          place,
          city,
          state,
          img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + img)),
            contentType: 'image/png'
          },
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { fountains: fountain._id}}
        );

        return fountain;
      }
      throw new AuthenticationError('You need to be logged in');
    },
    saveFountain: async (parent, { fountainId }, context ) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }

      const fountain = await Fountain.findById(fountainId);
      if (!fountain) {
        throw new Error('Fountain not found');
      }

      context.user.saved.push(fountainId);

      await context.user.save();

      return fountain;
    }
  }
}

module.export = resolvers;