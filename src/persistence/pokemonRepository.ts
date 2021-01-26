import {columns,tableName} from "./pokemonSchema";
import * as Knex from "knex";
import Pokemon from "persistence/pokemon";

 export class PokemonRepository {
    
    Knex: Knex; 
    constructor(Knex:Knex) {
         this.Knex = Knex;
     }

 getAllPokemon = () => {
    return  this.Knex.select().table(tableName).then((res:any)=>res)
};

 getOne = (param:string):Promise <Pokemon | undefined> => {
    return this.Knex(tableName).where(columns.id, param).then((res:any)=>res)
}

 update = (param:string):Promise <Pokemon | undefined> => {
    return this.Knex(tableName)
             .where({ id: param })
             .update({ name: "Hans" })
}

 deletOne = (param:string):Promise <Pokemon | undefined> => {
    return this.Knex(tableName)
             .where({ id: param })
             .del()
}

 add = (body:any):Promise <Pokemon | undefined> => {
    return this.Knex(tableName).insert({name:body})
}
 }
  


