const router = require('express').Router()
const Player = require('../models/Player')

router.post('/', async (req, res) => {   
    const {
        atleta_id,
        clube_id,
        posicao_id,
        status_id,
        pontos_num,
        preco_num,
        variacao_num,
        media_num,
        jogos_num,
        minimo_para_valorizar,
        slug,
        apelido,
        apelido_abreviado,
        nome,
        foto,
        clube_nome,
        A, CA, DS, FC, FD, FF, FS, G, PI, DE, DP, GS, SG, CV, PC, FT, I, PP, GC, PS
    } = req.body

    const player = {
        atleta_id,
        clube_id,
        posicao_id,
        status_id,
        pontos_num,
        preco_num,
        variacao_num,
        media_num,
        jogos_num,
        minimo_para_valorizar,
        slug,
        apelido,
        apelido_abreviado,
        nome,
        foto,
        clube_nome,
        A, CA, DS, FC, FD, FF, FS, G, PI, DE, DP, GS, SG, CV, PC, FT, I, PP, GC, PS
    }

    try{
        await Player.create(player)
        res.status(201).json({message: "Sucesso!"})
    }catch(error){
        res.status(500).json({error: error})
    }
})

router.get('/', async (req, res) => {
    try{
        const player = await Player.find()
        res.status(200).json(player)
    }
    catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router