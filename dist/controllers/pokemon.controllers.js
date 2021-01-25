"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPokemonControllers = void 0;
const pokemonRepository_1 = require("../persistence/pokemonRepository");
const getAllPokemonControllers = (knex) => ({
    getAllPokemon: getAll(knex),
    addPokemon: addOne(knex),
    getOnePokemon: getOn(knex),
    updatePokemon: updateOne(knex),
    deleteOnePokemon: deleteOne(knex)
});
exports.getAllPokemonControllers = getAllPokemonControllers;
const getAll = (Knex) => (req, reply) => (pokemonRepository_1.getAllPokemon(Knex).then((response) => reply.status(200).send({ pokemon: response })));
const getOn = (Knex) => (req, reply) => (pokemonRepository_1.getOne(Knex, req.params.id).then((response) => reply.send({ response: response })));
const updateOne = (Knex) => (req, reply) => (pokemonRepository_1.update(Knex, req.params.id).then((response) => reply.send({ response: "pokemon updated" })));
const deleteOne = (Knex) => (req, reply) => (pokemonRepository_1.deletOne(Knex, req.params.id).then((response) => reply.send({ response: "pokemon deleted" })));
const addOne = (Knex) => (req, reply) => {
    console.log(req.body);
};
//# sourceMappingURL=pokemon.controllers.js.map