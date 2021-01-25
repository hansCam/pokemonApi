"use strict";
//
// THIS FILE HAS BEEN AUTOGENERATED. DO NOT MODIFY.
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemons = exports.PokemonsSchema = void 0;
const t = require("io-ts");
const Pokemon_1 = require("./Pokemon");
exports.PokemonsSchema = JSON.parse(`{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "number"
      },
      "name": {
        "type": "string"
      }
    }
  }
}`);
exports.Pokemons = t.array(Pokemon_1.Pokemon);
//# sourceMappingURL=Pokemons.js.map