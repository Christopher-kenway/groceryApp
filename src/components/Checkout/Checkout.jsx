import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Badge,
  Divider,
  Card,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Add as AddIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  AccountBalance as AccountBalanceIcon,
  Money as MoneyIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { green } from "@mui/material/colors";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const PaymentMethodDialog = ({ open, onClose }) => {
  const [
    { selectedPaymentMethod, openDebitDialog, openTransferDialog },
    dispatch,
  ] = useStateValue();

  const handlePaymentMethodChange = (event) => {
    const value = event.target.value;
    dispatch({
      type: actionType.SET_PAYMENT_METHOD,
      payload: value,
    });
    if (value === "debit") {
      dispatch({
        type: actionType.SET_OPEN_DEBIT_DIALOG,
        payload: true,
      });
      dispatch({
        type: actionType.SET_OPEN_TRANSFER_DIALOG,
        payload: false,
      });
    } else if (value === "bank") {
      dispatch({
        type: actionType.SET_OPEN_TRANSFER_DIALOG,
        payload: true,
      });
      dispatch({
        type: actionType.SET_OPEN_DEBIT_DIALOG,
        payload: false,
      });
    } else {
      dispatch({
        type: actionType.SET_OPEN_DEBIT_DIALOG,
        payload: false,
      });
      dispatch({
        type: actionType.SET_OPEN_TRANSFER_DIALOG,
        payload: false,
      });
    }
  };

  const handleClose = () => {
    dispatch({
      type: actionType.SET_OPEN_DEBIT_DIALOG,
      payload: false,
    });
    dispatch({
      type: actionType.SET_OPEN_TRANSFER_DIALOG,
      payload: false,
    });
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        aria-labelledby="responsive-dialog-title"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { borderRadius: "15px" },
        }}
      >
        <Card>
          <CardContent className="flex flex-col mx-auto w-full h-full">
            <DialogTitle
              className="flex items-center justify-between gap-28"
              sx={{ margin: 0 }}
            >
              <p className="text-md font-medium ">Payment Method</p>
              <IconButton
                edge="end"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <FormControl className="h-full w-full mx-auto">
              <RadioGroup
                aria-label="payment method"
                name="paymentMethod"
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
                className="gap-10 p-3"
              >
                <FormControlLabel
                  value="debit"
                  control={<Radio color="success" />}
                  label={
                    <div className="flex justify-between items-center gap-20">
                      <div className="mr-4 px-1 py-2 flex items-center">
                        <span className="text-sm font-medium mr-48 ">
                          Add Debit card
                        </span>
                        <CreditCardIcon className="" />
                      </div>
                    </div>
                  }
                  className="border-b-2 border-gray-700"
                  sx={{ margin: 0 }}
                />

                <FormControlLabel
                  value="bank"
                  control={<Radio color="success" />}
                  label={
                    <div className="flex w-full items-center">
                      <div className="mr-4  px-1 py-2 flex items-center">
                        <span className="text-sm font-medium mr-48">
                          Bank Transfer
                        </span>
                        <AccountBalanceIcon className="ml-2" />
                      </div>
                    </div>
                  }
                  className="border-b-2 border-gray-700"
                  sx={{ margin: 0, marginTop: 2, marginBottom: 2 }}
                />

                <FormControlLabel
                  value="cash"
                  control={<Radio color="success" />}
                  label={
                    <div className="flex w-full items-center">
                      <div className="mr-4  px-1 py-2 flex items-center">
                        <span className="text-sm font-medium mr-64 ">Cash</span>
                        <MoneyIcon className="" />
                      </div>
                    </div>
                  }
                  className="border-b-2 border-gray-700"
                  sx={{ margin: 0 }}
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Dialog>

      {/* DEBIT CARD DIALOG */}
      <Dialog
        open={openDebitDialog}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: 15 } }}
      >
        <DialogTitle className="flex items-center justify-center">
          <span className="font-semibold flex-1"> Add Card</span>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon className="text-green-900 border-green-900 border-2 rounded-full" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="mb-4 font-semibold text-lg">
            <span className="text-green-900">Amount Due:</span> ₦12,850
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Card Holder
              </label>
              <input
                type="text"
                className="w-full border border-gray-800 rounded-lg p-2"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-800 rounded-lg p-2"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="flex gap-4">
              <div className="mb-4 flex-1">
                <label className="block text-sm font-medium mb-1">
                  Card Expiry
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-800 rounded-lg p-2"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-4 flex-1">
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  className="w-full border border-gray-800 rounded-lg p-2"
                  placeholder="000"
                />
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <div className="flex items-center justify-center w-full">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-green-900 px-4 py-2 border-green-900 border-2 rounded-lg cursor-pointer w-64 mb-5"
              onClick={handleClose}
              color="primary"
            >
              Pay
            </motion.button>
          </div>
        </DialogActions>
      </Dialog>

      {/* bank transfer DIALOG */}
      <Dialog
        open={openTransferDialog}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: 15 } }}
      >
        <DialogTitle className="flex items-center justify-center">
          <span className="font-semibold flex-1"> Bank Transfer</span>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon className="text-green-900 border-green-900 border-2 rounded-full" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="mb-4">
            <div className="text-lg font-bold mb-2">
              Make a Transfer of
              <span className="text-green-900"> NGN 12,850</span> to:
            </div>
            <div className="mb-2">Name: Eriqueenah Grocery Store Credits</div>
            <div className="mb-2">Account Number: 0000000000</div>
            <div className="mb-2">Bank: WEMA BANK</div>
            <Divider className="my-2" />
            <div className="text-sm flex items-center w-full border-2 border-green-900 rounded-lg justify-center  ">
              <Button color="success" className="text-green-900">
                Copy account number
              </Button>
            </div>
          </div>
        </DialogContent>
        <div className="flex justify-center items-center w-full mb-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-green-900 px-4 py-2 border-green-900 border-2 rounded-lg cursor-pointer"
            onClick={handleClose}
            color="primary"
          >
            proceed
          </motion.button>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

const Checkout = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [openDebitDialog, setOpenDebitDialog] = useState(false);
  const [openTransferDialog, setOpenTransferDialog] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: !cartShow,
    });
  };

  const handlePaymentDialogOpen = () => {
    setOpen(true);
  };

  const handlePaymentDialogClose = () => {
    setOpen(false);
    setOpenDebitDialog(false);
    setOpenTransferDialog(false);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    if (event.target.value === "debit") {
      setOpenDebitDialog(true);
      setOpenTransferDialog(false);
    } else if (event.target.value === "bank") {
      setOpenTransferDialog(true);
      setOpenDebitDialog(false);
    } else {
      setOpenDebitDialog(false);
      setOpenTransferDialog(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 left-0 w-full md:w-[50%] h-screen p-6 md:p-12 lg:p-6 drop-shadow-md bg-white z-[101] overflow-y-scroll"
    >
      <div className="w-full flex items-center justify-between p-4 mx-auto">
        <h2 className="text-md font-bold mr-24">Order Summary</h2>
        <div className="flex items-center justify-center gap-3">
          <h7 className="text-sm">My Cart</h7>
          <IconButton aria-label="cart">
            <StyledBadge
              className="mr-10"
              badgeContent={3}
              sx={{
                color: green[900],
                "&.Mui-checked": {
                  color: green[900],
                },
              }}
              color="success"
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            onClick={showCart}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="p-2 border-b-2 border-gray-200">
          <div className="p-2 flex justify-between bg-green-300 rounded-l-lg rounded-r-lg">
            <div>
              <p className="font-bold">Strawberry X 20</p>
              <p className="text-sm">Uncut</p>
              <p className="text-sm">Frozen</p>
            </div>
            <div className="text-right">
              <p>₦ 6,000</p>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="p-2 border-b-2 border-gray-200">
          <div className="p-2 flex justify-between bg-green-300 rounded-l-lg rounded-r-lg">
            <div>
              <p className="font-bold">Eggplant X 2</p>
              <p className="text-sm">Uncut</p>
            </div>
            <div className="text-right">
              <p>₦ 6,100</p>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2 flex justify-between bg-green-300 rounded-l-lg rounded-r-lg">
            <div>
              <p className="font-bold">Banana X 5</p>
              <p className="text-sm">Cut</p>
              <p className="text-sm">Frozen</p>
            </div>
            <div className="text-right">
              <p>₦ 750</p>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-4 font-bold">
        <p>Subtotal: ₦ 12,850</p>
      </div>
      <Divider />

      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold mb-2">Payment Method</h3>
        <IconButton onClick={handlePaymentDialogOpen}>
          <AddIcon />
        </IconButton>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-bold mb-2">Choose Address</h3>
        <IconButton>
          <EditIcon />
        </IconButton>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Add a note to your order</h3>
        <textarea
          className="w-full border-2 border-green-700 rounded-lg p-2"
          rows="4"
        ></textarea>
      </div>
      <div className="mt-3 text-right">
        <div className="flex justify-between font-medium">
          <p className="text-green-800">Subtotal</p>
          <p>₦ 12,850</p>
        </div>
        <div className="flex justify-between">
          <p className="text-green-800">Delivery Fee</p>
          <p>₦ 0</p>
        </div>
        <div className="flex justify-between font-bold">
          <p className="text-green-800">Grand Total</p>
          <p className="text-green-900">₦ 12,850</p>
        </div>
      </div>
      <div className="mt-3">
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#064F26",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#046A38",
            },
          }}
          onClick={() => alert("Order placed!")}
        >
          Place Order
        </Button>
      </div>

      <PaymentMethodDialog
        open={open}
        onClose={handlePaymentDialogClose}
        selectedPaymentMethod={selectedPaymentMethod}
        setSelectedPaymentMethod={handlePaymentMethodChange}
      />
    </motion.div>
  );
};

export default Checkout;
