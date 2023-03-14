

import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async (namoOrId: string) => {
  
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${namoOrId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}