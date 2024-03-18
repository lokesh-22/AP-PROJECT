const express = require('express')
const router = express.Router()

const commands = require('../controllers/commands')

router.route('/createuser').post(commands.createUser)
router.route('/loginuser').post(commands.loginUser)
router.route('/displaydata').post(commands.displayData)

module.exports = router