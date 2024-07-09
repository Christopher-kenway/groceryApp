import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import {
  Button,
  Badge,
  IconButton,
  Dialog,
  DialogTitle,
  Card,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MoneyIcon from "@mui/icons-material/Money";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const PaymentMethodDialog = ({
  open,
  onClose,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}) => {
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  const [openDebitDialog, setOpenDebitDialog] = React.useState(false);
  const [openTransferDialog, setOpenTransferDialog] = React.useState(false);

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
                className="gap-10 p-3 "
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
                  value="Cash"
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
    </React.Fragment>
  );
};

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("debit");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePaymentDialogOpen = () => {
    setPaymentDialogOpen(true);
  };

  const handlePaymentDialogClose = () => {
    setPaymentDialogOpen(false);
  };

  return (
    <div className="p-6 md:p-12 lg:p-24">
      <div className="flex items-center justify-between px-2 mx-auto">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        <div className="flex gap-6 items-center justify-center">
          <h7 className="">My Cart</h7>
          <IconButton aria-label="cart">
            <StyledBadge className="mr-4" badgeContent={3} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <Divider />

      <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="p-2 border-b-2 border-gray-200">
          <div className="p-2 flex justify-between bg-green-300 rounded-l-lg rounded-r-lg">
            <div>
              <p className="font-bold ">Strawberry X 20</p>
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
      <div className="mt-6">
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
        open={paymentDialogOpen}
        onClose={handlePaymentDialogClose}
        selectedPaymentMethod={selectedPaymentMethod}
        setSelectedPaymentMethod={setSelectedPaymentMethod}
      />
    </div>
  );
};

export default Checkout;
