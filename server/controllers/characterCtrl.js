const good = require('../../good.json')
const bad = require('../../bad.json')
const axios = require('axios')

const army = [];
let id = 0;


module.exports = {
    
    getAllBad: (req, res) => {
        res.status(200).send(bad)
    },
    getAllGood: (req, res) => {
        res.status(200).send(good)
    },
    addToArmy: (req, res) => {
        const wizObj = {
            id: id++,
            name: req.body.name,
            house: req.body.house,
            special_ability: req.body.special_ability,
            patronus: req.body.patronus,
            catch_phrase: req.body.catch_phrase,
            image: req.body.image
        }
        army.push(wizObj)
        res.status(200).send(army)
    }
}

