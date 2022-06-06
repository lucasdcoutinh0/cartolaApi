const router = require('express').Router()
const rodada_00 = require('../data/rodada_00')
const rodada_01 = require('../data/rodada_01')
const rodada_02 = require('../data/rodada_02')
const rodada_03 = require('../data/rodada_03')
const rodada_04 = require('../data/rodada_04')
const rodada_05 = require('../data/rodada_05')
const rodada_06 = require('../data/rodada_06')
const rodada_07 = require('../data/rodada_07')
const rodada_08 = require('../data/rodada_08')

router.get('/rodada_00', (req, res) => {
    return res.json(rodada_00)
})

router.get('/rodada_01', (req, res) => {
    return res.json(rodada_01)
})

router.get('/rodada_02', (req, res) => {
    return res.json(rodada_02)
})

router.get('/rodada_03', (req, res) => {
    return res.json(rodada_03)
})

router.get('/rodada_04', (req, res) => {
    return res.json(rodada_04)
})

router.get('/rodada_05', (req, res) => {
    return res.json(rodada_05)
})

router.get('/rodada_06', (req, res) => {
    return res.json(rodada_06)
})

router.get('/rodada_07', (req, res) => {
    return res.json(rodada_07)
})

router.get('/rodada_08', (req, res) => {
    return res.json(rodada_08)
})

module.exports = router