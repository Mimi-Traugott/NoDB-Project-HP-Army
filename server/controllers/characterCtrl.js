const good = require('../../good.json')
const bad = require('../../bad.json')
const axios = require('axios')

let id = 0;

const army = [];

module.exports = {
    
    getAllBad: (req, res) => {
        res.status(200).send(bad)
    },
    getAllGood: (req, res) => {
        res.status(200).send(good)
    }
}

