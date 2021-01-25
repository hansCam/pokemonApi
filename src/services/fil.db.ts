
import fastify from 'fastify';
import { getMinMaxBoundedDistributiveLattice } from 'fp-ts/lib/BoundedDistributiveLattice';
const knex = require("knex");
require("dotenv").config();
const fetch = require('node-fetch');
import * as pokemonSchema from "../persistence/pokemonSchema"




function fetchPokemons(url:string):Promise<{}>{
          return fetch(url)
}



export default fetchPokemons;
