import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        //Strings
        name: '',
        location_area_encounters: '',
        sprites: {},
        //Int
        height: 0,
        weight: 0,
        id: 0,
        base_experience: 0,
        //Arrays
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        moves: [],
        stats: [],
        types: [],
        
    },
    reducers: {
        findPokemon: (state, action) => {
            const {
                name,
                location_area_encounters,
                sprites,
                height, 
                weight, 
                id,
                base_experience,
                abilities, 
                forms, 
                game_indices,
                held_items,
                moves,
                stats,
                types,
                
            } = action.payload

            state.name = name;
            state.location_area_encounters = location_area_encounters;
            state.sprites = sprites;
            state.height = (height * 0.1).toFixed(2); //Necesario transformar de hectogramos a kilogramos o libras
            state.weight = (weight * 0.1).toFixed(2); //Necesario transformar de decimetros a centimetros o metros
            state.id = id;
            state.base_experience = base_experience;
            state.abilities = abilities;
            state.forms = forms;
            state.game_indices = game_indices;
            state.held_items = held_items;
            state.moves = moves;
            state.stats = stats; 
            state.types = types;
            
        },

    }
})

export const {findPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer