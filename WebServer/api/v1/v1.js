const v1Routes = require('express').Router();
const vehiclesJSON = require('./vehiclesInfo/vehicles.json');

v1Routes.route('/vehicle-info')
        .get((req, res, next) => {
            const vehiclesInfo = [];
            console.log(vehiclesJSON);
            console.log(typeof vehiclesJSON);
            vehiclesJSON.map((vehicle, index) => {
                    vehicle.latitude = Math.floor(Math.random() * 90) + 1
                    vehicle.longitude = Math.floor(Math.random() * 100) + 1;
            })

            res.json(vehiclesJSON);
        });

module.exports = v1Routes;
