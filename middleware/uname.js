const express = require("express");

let uname = (req, res, next) => {
  if (req.query.uname) {
    req.username = req.query.uname.trim().toLowerCase();
  } else {
    req.username = null;
  }
  next();
};
module.exports = uname;
