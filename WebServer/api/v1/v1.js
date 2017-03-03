const v1Routes = require('express').Router();
const vehiclesJSON = require('./vehiclesInfo/vehicles.json');

v1Routes.route('/vehicle-info')
        .get((req, res, next) => {
            res.json(vehiclesJSON);
        });

module.exports = v1Routes;
