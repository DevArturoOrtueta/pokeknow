import React from 'react'

export const PokemonCard = ({name, id}) => {
    return <div>
        <h1>{name}</h1>
        <p>{id}</p>
    </div>
}
