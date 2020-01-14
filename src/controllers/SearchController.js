const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index (request, response)  {

        const {latitude, longetude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({

            techs : {
                $in : techsArray,
            },
            location : {
                $near : {
                    $geometry : {
                        type : 'Point',
                        coordinates : [longetude, latitude], 
                    },
                    $maxDistance: 10000,
                }
            }
        });     

        return response.json({ devs });
    },

    async update (request, response)  {
        // Atualizar um DEV
    },

    async destroy (request, response)  {
        // Deletar um DEV        
    },

}