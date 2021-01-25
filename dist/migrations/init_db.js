"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const fil_db_1 = require("../services/fil.db");
const pokemonSchema_1 = require("../persistence/pokemonSchema");
async function up(knex) {
    await knex.schema.raw(`
    ALTER DATABASE ${knex.client.database()} CHARACTER SET utf8
  `);
    await knex.schema.raw(`
    CREATE TABLE pokemon
    (
        id INT NOT NULL,
        name VARCHAR(255)  NULL,
        PRIMARY KEY(id)
    );
  `);
    await fil_db_1.default("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((pokemon) => {
        for (var i = 0; i < 20; i++) {
            knex(pokemonSchema_1.tableName).insert({ name: pokemon.results[i].name })
                .then((response) => console.log(response));
        }
    });
}
exports.up = up;
;
async function down(knex) {
    await knex.schema.raw(`DROP TABLE IF EXISTS store`);
}
exports.down = down;
//# sourceMappingURL=init_db.js.map