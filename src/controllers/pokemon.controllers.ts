import {PokemonRepository } from "../persistence/pokemonRepository";
import  ReadPokemonsContract, { GetOnePokemon, UpdatePokemon ,DeleteOnePokemon,AddPokemon} from "../generated/contracts/ReadPokemonsContract"
import {GetAllPokemon }from "../generated/contracts/ReadPokemonsContract";
import * as Knex from 'knex';



export const getAllPokemonControllers = (knex:Knex,pokemonRepository:PokemonRepository): ReadPokemonsContract => ({
    getAllPokemon: getAll(knex,pokemonRepository),
    addPokemon: addOne(knex,pokemonRepository),
    getOnePokemon: getOn(knex,pokemonRepository),
    updatePokemon: updateOne(knex,pokemonRepository),
    deleteOnePokemon: deleteOne(knex,pokemonRepository)
  });


 const getAll = (Knex:Knex,pokemonRepository:PokemonRepository) :GetAllPokemon => (req,reply) => {
   pokemonRepository.getAllPokemon().then((response:Array<object>) => reply.status(200).send({pokemon:response}))
 };


 const getOn = (Knex:Knex,pokemonRepository:PokemonRepository) :GetOnePokemon => (req,reply) => (
   pokemonRepository.getOne(req.params.id).then((response:any) => console.log(response))
  );

 const updateOne = (Knex:Knex,pokemonRepository:PokemonRepository) :UpdatePokemon => (req,reply) => (
   pokemonRepository.update(req.params.id).then((response:any) => reply.send({response:"pokemon updated"}))
 );
      
 const deleteOne = (Knex:Knex,pokemonRepository:PokemonRepository) :DeleteOnePokemon => (req,reply) => (
    pokemonRepository.deletOne(req.params.id).then((response:any) => reply.send({response:"pokemon deleted"}))
  );

 const addOne =  (Knex:Knex,pokemonRepository:PokemonRepository) :AddPokemon => (req,reply) => {
        console.log(req.body)
 };

  
