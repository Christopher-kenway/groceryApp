export const actionType = {
  SET_CART_SHOW: "SET_CART_SHOW"
}

const reducer = (state, action) => {
    switch (actionType.type){
  case actionType.SET_CART_SHOW:
  return {
    ...state,
    cartShow: actionType.cartShow
  };

  default:
    return state;
};
}



export default reducer;
