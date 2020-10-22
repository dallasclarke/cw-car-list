const router = require('express').Router();
const {getAllCars} = require('./controllers/carController');

router.get('/get-cars', getAllCars);
router.post('/create-car', )


module.exports = router;