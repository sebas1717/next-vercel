
const toggleFavorite = ( id: number) => {

    console.log('toggleFavorite llamado');

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    if( favorites.includes(id) ){
        favorites = favorites.filter( pokeId => pokeId !== id);
    }else{
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify(favorites) );

}

const existInFavorites = ( id: number ): boolean => {
    if( typeof window === 'undefined' ) return false;
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');
    return favorites.includes( id );
}


//lo llamaré desde un effect para no tener que preguntar si estoy en el frontal con typeof window.
const pokemos = (): number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]');
}


export default {
    toggleFavorite,
    existInFavorites,
    pokemos
}