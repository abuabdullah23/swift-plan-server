const { createAuthJWT } = require('../controllers/authControllers/createAuthJWT');

const router = require('express').Router();

router.post('/jwt', createAuthJWT);

module.exports = router;