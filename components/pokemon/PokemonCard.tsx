import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon: {id, name, img}}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${ name }`);
    }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        <Card isHoverable isPressable onClick={onClick}>
            <Card.Body>
            <Card.Image 
            src={img}
            width="100%"
            height={140}
            alt={name}
            />
            </Card.Body>
            <Card.Footer>
            <Row justify='space-between'>
                <Text transform='capitalize'>{name}</Text>
                <Text>#{ id }</Text>
            </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}
