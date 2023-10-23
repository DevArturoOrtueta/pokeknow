import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        name: '',
        height: 0,
        weight: 0,
        id: 0,
        abilities: [],
        forms: [],
        game_indices: [],
    },
    reducers: {
        findPokemon: (state, action) => {
            const {
                name,
                height, 
                weight, 
                id, 
                abilities, 
                forms, 
                game_indices
            } = action.payload
            
            state.name = name;
            state.height = height; //Necesario transformar de hectogramos a kilogramos o libras
            state.weight = weight; //Necesario transformar de decimetros a centimetros o metros
            state.id = id;
            state.abilities = abilities;
            state.forms = forms;
            state.game_indices = game_indices;
        }
    }
})

export const {findPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer