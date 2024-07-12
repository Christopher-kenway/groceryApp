export const initialState = {
  cartShow: false,
  selectedPaymentMethod: '',
  openDebitDialog: false,
  openTransferDialog: false,
  openLoadingDialog: false,
  openSuccessDialog: false,
  openReceiptDialog: false,
};

export const actionType = {
  SET_CART_SHOW: 'SET_CART_SHOW',
  SET_PAYMENT_METHOD: 'SET_PAYMENT_METHOD',
  SET_OPEN_DEBIT_DIALOG: 'SET_OPEN_DEBIT_DIALOG',
  SET_OPEN_TRANSFER_DIALOG: 'SET_OPEN_TRANSFER_DIALOG',
  SET_OPEN_LOADING_DIALOG: 'SET_OPEN_LOADING_DIALOG',
  SET_OPEN_SUCCESS_DIALOG: 'SET_OPEN_SUCCESS_DIALOG',
  SET_OPEN_RECEIPT_DIALOG: 'SET_OPEN_RECEIPT_DIALOG',
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
    case actionType.SET_OPEN_LOADING_DIALOG:
      return {
        ...state,
        openLoadingDialog: action.payload,
      };
    case actionType.SET_OPEN_SUCCESS_DIALOG:
      return {
        ...state,
        openSuccessDialog: action.payload,
      };
    case actionType.SET_OPEN_RECEIPT_DIALOG:
      return {
        ...state,
        openReceiptDialog: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;