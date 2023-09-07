const knex = require('knex')
const path = require('path');
const { readFile } = require('fs/promises');

const OK = 200;
const FILE = path.resolve(__dirname, '..', 'seed.json');

module.exports = async (_req, res, _next) => {
  const file = await readFile(FILE, 'utf-8');
  return res.status(OK).json(JSON.parse(file));
};
