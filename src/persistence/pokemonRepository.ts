import {columns,tableName} from "./pokemonSchema";
import * as Knex from "knex";
import Pokemon from "persistence/pokemon";

/* export class PokemonRepository  {
    constructor(private Knex: Knex) {} */

export const getAllPokemon = (Knex:Knex) => {
    return  Knex.select().table(tableName).then((res:any)=>res)
};

export const getOne = (Knex:Knex,param:string):Promise <Pokemon | undefined> => {
    return Knex(tableName).where(columns.id, param).then((res:any)=>res)
}

export const update = (Knex:Knex,param:string):Promise <Pokemon | undefined> => {
    return Knex(tableName)
             .where({ id: param })
             .update({ name: "Hans" })
}

export const deletOne = (Knex:Knex,param:string):Promise <Pokemon | undefined> => {
    return Knex(tableName)
             .where({ id: param })
             .del()
}

export const add = (Knex:Knex,body:any):Promise <Pokemon | undefined> => {
    return Knex(tableName).insert({name:body})
}

/*   };
 */  


