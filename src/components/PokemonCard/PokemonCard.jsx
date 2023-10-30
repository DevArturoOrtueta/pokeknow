import React from 'react'
import '../PokemonCard/css/PokemonCard.css'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { capitalizeFirstLetter } from '../../helper/capitalizeLetter';

export const PokemonCard = ({name, id, location_area_encounters, sprites, height, weight, base_experience, abilities, forms, game_indices, held_items, moves, stats, types}) => {
    return (
        <Card shadow="sm" key={id} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={name}
              className="w-full object-cover h-[140px]"
              src={sprites.front_default}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{capitalizeFirstLetter(name) + " "}</b>
            <p className="text-default-500">{id}</p>
          </CardFooter>
        </Card>
    )
}

