export function increment(umur){
  return dispatch => {
    dispatch({
      type: 'INCREMENT',
      payload: umur + 1
    })
  }
}

export function getListPokemon(){
  return dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20')
      .then(response => response.json())
      .then(({results}) => dispatch({
        type: 'GET_LIST_POKEMON',
        payload: results
      }))
      .catch(err => err)
      .finally(res => res)
  }
}