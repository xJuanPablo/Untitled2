const db = require('../config/connection');
const Fountain = require('../models/Fountain')
const fountainSeeds = require('./demoFountain.json')

db.once('open', async () => {
  await Fountain.deleteMany({});

  const technologies = await Fountain.insertMany(fountainSeeds);

  console.log('Technologies seeded!');
  process.exit(0);
});
