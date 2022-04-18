const res = require("express/lib/response");
const { append } = require("express/lib/response");

const landing = (req, res) => {
  res.status(200);
  return res.render('landing');
};

const main = (req, res) => {
  res.status(200);
  return res.render('main');
};

const register = (req, res) => {
  res.status(200);
  return res.render('register');
};


module.exports = {
  landing,
  main,
  register
};

