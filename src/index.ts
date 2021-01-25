
import fastify from 'fastify';
require("dotenv").config();
import {up,down} from '../src/migrations/init_db';
import { registerFastify } from "./generated/contracts/registerFastify";
import { getAllPokemonControllers } from './controllers/pokemon.controllers';




function main():void {
    const server = fastify();
    const knex = require('knex')({//c r dans larchi la config de la bdd est un detail 
      //pour les autres composants
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


   registerFastify(server,{
       readPokemons:getAllPokemonControllers(knex)//presenter
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