export const initialState = {
  cartShow: false,
  selectedPaymentMethod: '',
  openDebitDialog: false,
  openTransferDialog: false,
};

export const actionType = {
  SET_CART_SHOW: 'SET_CART_SHOW',
  SET_PAYMENT_METHOD: 'SET_PAYMENT_METHOD',
  SET_OPEN_DEBIT_DIALOG: 'SET_OPEN_DEBIT_DIALOG',
  SET_OPEN_TRANSFER_DIALOG: 'SET_OPEN_TRANSFER_DIALOG',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.payload,
      };
    case actionType.SET_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: action.payload,
      };
    case actionType.SET_OPEN_DEBIT_DIALOG:
      return {
        ...state,
        openDebitDialog: action.payload,
      };
    case actionType.SET_OPEN_TRANSFER_DIALOG:
      return {
        ...state,
        openTransferDialog: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
