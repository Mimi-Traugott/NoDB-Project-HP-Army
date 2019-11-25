const good = require('../../good.json')
const bad = require('../../bad.json')
const axios = require('axios')

var army = {
    name: "",
    wizArr:[]
};
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
        army.wizArr.push(wizObj)
        console.log('addtoarmy', army)
        res.status(200).send(army)
    },
    nameArmy: (req, res, next) => {
        let {nameOfArmy} = req.body
        console.log(req.body)
        army.name = nameOfArmy
        res.status(200).send(army)
    },
    updateArmyName: (req, res) => {
        let {nameOfArmy} = req.body
        console.log('test update', nameOfArmy)
        army.name = nameOfArmy
        res.status(200).send(army.name)
    },

    getArmy: (req, res) => {
        res.status(200).send(army)
    },

    killWizard: (req, res) => {
        const {id} = req.params
        console.log('going to delete', id)
        const index = army.wizArr.findIndex(element => element.id === +id)
        army.wizArr.splice(index, 1);
        res.status(200).send(army)
    },
}

