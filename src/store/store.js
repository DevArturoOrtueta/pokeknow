import { configureStore } from "@reduxjs/toolkit";
import allPokemonSlice from "../slices/allPokemonSlice";
import pokemonReducer from '../slices/pokemonSlice';
import scrollReducer from '../slices/scrollSlice'

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        allpokemon: allPokemonSlice,
        scroll: scrollReducer,
    }
})
