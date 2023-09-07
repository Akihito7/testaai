const knex = require('../database');

const { Router } = require("express");

const routes = Router();

//pegando todos item
routes.get('/', async (req, res) => {

    try {
        const data = await knex('Products');

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

//pegando item por nome
routes.get('/:valor', async (req, res) => {

    const { valor } = req.params

    try {
        const byName = await knex("Products").where({ name: valor }).first();

        if(byName) return res.status(200).json(byName);

        const byCategory = await knex("Products").where({category: valor})

        if(byCategory) return res.status(200).json(byCategory);

        const byDescription = await knex("Products").where({description: valor});

        if(byDescription)return  res.status(200).json(byDescription);

        return res.status(200).json({
            message: 'produto nao encontrado'
        })

    } catch (error) {
        res.status(200).json(error)
    }

});

//pegando item por descrição
routes.get('/desc/:description', async (req, res) => {
    const { description } = req.params;

    try {
        const data = await knex('Products')
            .where('description', 'like', `%${description}%`);

        res.json(data);
    } catch (error) {
        res.status(500).json(error)
    }

});

//pegando item por preço
routes.get('/price/:price', async (req, res) => {
    const { price } = req.params;

    try {

        const data = await knex('Products').where({
            price
        });
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error)
    }


});

module.exports = routes;
