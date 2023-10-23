import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        name: '',
        height: 0,
        weight: 0,
        id: 0,
    },
    reducers: {
        findPokemon: (state, action) => {
            const {name, height, weight, id} = action.payload
            state.name = name;
            state.height = height; //Necesario transformar de hectogramos a kilogramos o libras
            state.weight = weight; //Necesario transformar de decimetros a centimetros o metros
            state.id = id;
        }
    }
})

export const {findPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer