"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.deletOne = exports.update = exports.getOne = exports.getAllPokemon = void 0;
const pokemonSchema_1 = require("./pokemonSchema");
function getAllPokemon(Knex) {
    return Knex.select().table(pokemonSchema_1.tableName)
        .then((res) => res);
}
exports.getAllPokemon = getAllPokemon;
;
function getOne(Knex, param) {
    return Knex(pokemonSchema_1.tableName).where(pokemonSchema_1.columns.id, param)
        .then((res) => res);
}
exports.getOne = getOne;
function update(Knex, param) {
    return Knex(pokemonSchema_1.tableName)
        .where({ id: param })
        .update({ name: "Hans" });
}
exports.update = update;
;
function deletOne(Knex, param) {
    return Knex(pokemonSchema_1.tableName)
        .where({ id: param })
        .del();
}
exports.deletOne = deletOne;
;
function add(Knex, body) {
    return Knex(pokemonSchema_1.tableName).insert({ name: body });
}
exports.add = add;
;
//# sourceMappingURL=pokemonRepository.js.map