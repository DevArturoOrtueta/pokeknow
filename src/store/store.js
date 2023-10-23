import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../slices/pokemonSlice';
import scrollReducer from '../slices/scrollSlice'

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        scroll: scrollReducer,
    }
})
