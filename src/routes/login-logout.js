const router = require('express').Router();

module.exports = () => {
  router.post('/login', (req, res) => {

    console.log(req.cookies)
    console.log(req.signedCookies);

  });

  return router;
}