"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
require("dotenv").config();
const fetch = require('node-fetch');
function fetchPokemons(url) {
    return fetch(url);
}
exports.default = fetchPokemons;
//# sourceMappingURL=fil.db.js.map