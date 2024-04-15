const express = require('express')
const router = express.Router()

const commands = require('../controllers/commands')

router.route('/createuser').post(commands.createUser)
router.route('/loginuser').post(commands.loginUser)
router.route('/displaydata').post(commands.displayData)
router.route('/orderData').post(commands.orderData)
router.route('/myOrderData').post(commands.myOrderData)
module.exports = router