"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFastify = void 0;
const Pokemons_1 = require("../types/Pokemons");
function registerFastify(server, handlers) {
    server.get('/pokemons', { schema: { response: { 200: Pokemons_1.PokemonsSchema } } }, handlers.readPokemons.getAllPokemon);
    server.post('/pokemons', handlers.readPokemons.addPokemon);
    server.get('/pokemons/:id', { schema: { params: { "type": "object", "properties": { "id": { "type": "string", "description": "name of pokemon" } }, "required": ["id"] }, response: { 200: Pokemons_1.PokemonsSchema } } }, handlers.readPokemons.getOnePokemon);
    server.put('/pokemons/:id', { schema: { params: { "type": "object", "properties": { "id": { "type": "string", "description": "name of pokemon" } }, "required": ["id"] } } }, handlers.readPokemons.updatePokemon);
    server.delete('/pokemons/:id', { schema: { params: { "type": "object", "properties": { "id": { "type": "string", "description": "name of pokemon" } }, "required": ["id"] } } }, handlers.readPokemons.deleteOnePokemon);
}
exports.registerFastify = registerFastify;
//# sourceMappingURL=registerFastify.js.map