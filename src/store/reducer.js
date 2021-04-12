const initialState = {
  umurJono: 20
}

export default function reducer(state = initialState, action){
  const { type, payload } = action

  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        umurJono: payload
      };
  
    default:
      return state;
  }

}