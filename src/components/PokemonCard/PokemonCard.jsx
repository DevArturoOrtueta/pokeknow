import React from 'react'
import '../PokemonCard/css/PokemonCard.css'
import {Card, CardBody} from "@nextui-org/react";
import { capitalizeFirstLetter } from '../../helper/capitalizeLetter';

export const PokemonCard = ({name, id, location_area_encounters, height, weight, base_experience, abilities, forms, game_indices, held_items, moves, stats, types}) => {
    return <Card>
        <CardBody>
        <p>{capitalizeFirstLetter(name)}</p>
        </CardBody>
    </Card>
}
