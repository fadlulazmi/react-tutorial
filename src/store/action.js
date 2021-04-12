export function increment(umur){
  return dispatch => {
    dispatch({
      type: 'INCREMENT',
      payload: umur + 1
    })
  }
}