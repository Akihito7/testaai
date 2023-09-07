const connection = require('../database/index');
const path = require('path');
const { readFile } = require('fs/promises');

const FILE = path.resolve(__dirname, '..', 'seed.json');
const OK = 200;

module.exports = async (req, res) => {
  const { name } = req.params;
  console.log(name)
  const data = await connection('Products').where({name}).first();
  res.json(data);
};

// Teste:
// localhost:3001/talker/search?q=Ren
