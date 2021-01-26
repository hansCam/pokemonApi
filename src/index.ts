
import fastify from 'fastify';
require("dotenv").config();
import {up,down} from '../src/migrations/init_db';
import { registerFastify } from "./generated/contracts/registerFastify";
import { getAllPokemonControllers } from './controllers/pokemon.controllers';
import {PokemonRepository} from "../src/persistence/pokemonRepository";




function main():void {
    const server = fastify();
    const knex = require('knex')({
        client: 'mysql',
        connection: {
          host : process.env.DB_HOST,
          user : process.env.ROOT,
          password :process.env.MYSQL_PASSWORD,
          database : 'pokemon'
        }
       }
      );

    up(knex);
    down(knex);
    const pokeRepo = new PokemonRepository(knex);



    registerFastify(server,{
       readPokemons:getAllPokemonControllers(knex,pokeRepo)
    });
 
    return server.listen(8080, (err, address) => {
                if (err) {
                console.error(err);
                process.exit(1);
                };
                console.log(`Server listening at ${address}`);
            });
};

main();