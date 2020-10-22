const Cars = require('../models/Car');

module.exports = {
    getAllCars: (req, res) => {
        Cars.find()
        .then((foundCars) => {
            return res.render('main/index', {carList: foundCars});
        })
        .catch((err) => res.json({err}));
    }
}