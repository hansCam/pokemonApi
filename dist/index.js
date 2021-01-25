"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
require("dotenv").config();
const init_db_1 = require("../src/migrations/init_db");
const registerFastify_1 = require("./generated/contracts/registerFastify");
const pokemon_controllers_1 = require("./controllers/pokemon.controllers");
function main() {
    const server = fastify_1.default();
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.ROOT,
            password: process.env.MYSQL_PASSWORD,
            database: 'pokemon'
        }
    });
    init_db_1.up(knex);
    init_db_1.down(knex);
    registerFastify_1.registerFastify(server, {
        readPokemons: pokemon_controllers_1.getAllPokemonControllers(knex)
    });
    return server.listen(8080, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        ;
        console.log(`Server listening at ${address}`);
    });
}
;
main();
//# sourceMappingURL=index.js.map