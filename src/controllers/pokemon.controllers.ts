import {getAllPokemon,getOne,deletOne,add,update } from "../persistence/pokemonRepository";
import  ReadPokemonsContract, { GetOnePokemon, UpdatePokemon ,DeleteOnePokemon,AddPokemon} from "../generated/contracts/ReadPokemonsContract"
import {GetAllPokemon }from "../generated/contracts/ReadPokemonsContract";
import * as Knex from 'knex';



export const getAllPokemonControllers = (knex:Knex): ReadPokemonsContract => ({
    getAllPokemon: getAll(knex),
    addPokemon: addOne(knex),
    getOnePokemon: getOn(knex),
    updatePokemon: updateOne(knex),
    deleteOnePokemon: deleteOne(knex)
  });


 const getAll = (Knex:Knex) :GetAllPokemon => (req,reply) => (
    getAllPokemon(Knex).then((response:Array<object>) => reply.status(200).send({pokemon:response}))
  );


 const getOn = (Knex:Knex) :GetOnePokemon => (req,reply) => (
    getOne(Knex,req.params.id).then((response:any) => console.log(response))
  );

 const updateOne = (Knex:Knex) :UpdatePokemon => (req,reply) => (
    update(Knex,req.params.id).then((response:any) => reply.send({response:"pokemon updated"}))
 );
      
 const deleteOne = (Knex:Knex) :DeleteOnePokemon => (req,reply) => (
    deletOne(Knex,req.params.id).then((response:any)=>reply.send({response:"pokemon deleted"}))
  );

 const addOne =  (Knex:Knex) :AddPokemon => (req,reply) => {
        console.log(req.body)
 };

  
