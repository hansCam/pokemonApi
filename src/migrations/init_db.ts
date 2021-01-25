import * as Knex from "knex";
import fetchPokemons from "../services/fil.db";
import {columns,tableName} from "../persistence/pokemonSchema";



export async function up(knex:Knex): Promise<any> {
  await knex.schema.raw(`
    ALTER DATABASE ${knex.client.database()} CHARACTER SET utf8
  `)

   await knex.schema.raw(`
    CREATE TABLE pokemon
    (
        id INT NOT NULL,
        name VARCHAR(255)  NULL,
        PRIMARY KEY(id)
    );
  `);
  
   await fetchPokemons("https://pokeapi.co/api/v2/pokemon")
                   .then((res:any)=>res.json())
                   .then((pokemon:any)=>  {
                            for (var i = 0;i<20;i++){
                            knex(tableName).insert({name:pokemon.results[i].name})
                                           .then((response:any)=>console.log(response));
                            }
             });
};


export async function down(knex: Knex): Promise<any> {
  await knex.schema.raw(`DROP TABLE IF EXISTS store`)
}
