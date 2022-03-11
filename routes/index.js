var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/count/:from-:to", (req, res) => {
  let from = parseInt(req.params.from);
  let to = parseInt(req.params.to);

  if (!isNaN(from) && !isNaN(to)) {
    if (to < from) {
      let tmp = to;
      to = from;
      from = tmp;
    }

    let out = "<ol>";
    for (let i = from; i <= to; i++) {
      out += `<li>${i}</li>`;
    }
    out += "</ol>";
    res.send(out);
  } else {
    res.send("bad parameters");
  }
});

router.get("/", (req, res, next) => {
  if (req.username != null) {
    res.render("index", { username: req.username });
  } else {
    res.send("Hello, please login");
  }
});

module.exports = router;
