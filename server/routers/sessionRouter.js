const express = require('express');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
const sessionRouter = express.Router();
const accountController = require('../controllers/accountController')

sessionRouter.get('/logout', sessionController.logOut);

sessionRouter.get('/', cookieController.createCookie, sessionController.createSession, accountController.createAccount, (req, res) => {
  return res.status(200).json(res.locals.userInfo);
})

sessionRouter.get('/currentuser/:id', sessionController.getCurrentUser, (req, res) => {
  return res.status(200).json(res.locals.currentUser);
})

module.exports = sessionRouter;