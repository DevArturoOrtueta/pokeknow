import React from 'react'

export const PokemonCard = (props) => {
    return <div>
        <h1>{props.name}</h1>
        <p>{props.id}</p>
    </div>
}
