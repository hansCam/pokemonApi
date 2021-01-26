
const fetch = require('node-fetch');

export default function fetchPokemons(url:string):Promise<{}>{
          return fetch(url)
};

