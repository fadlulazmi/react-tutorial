const initialState = {
  umurJono: 20,
  listPokemon: []
}

export default function reducer(state = initialState, action){
  const { type, payload } = action

  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        umurJono: payload
      };
    case 'GET_LIST_POKEMON':
      return {
        ...state,
        listPokemon: payload
      }
  
    default:
      return state;
  }

}