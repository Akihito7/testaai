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
routes.get('/:name', async (req, res) => {

    const { name } = req.params

    try {
        const data = await knex("Products").where({ name }).first();

        res.status(200).json(data);

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
