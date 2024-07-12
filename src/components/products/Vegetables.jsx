import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "./Products.css";
import Chip from "@mui/material/Chip";
import { green } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  Dialog,
  Card,
  CardContent,
  Typography,
  Checkbox,
  Button,
  CardMedia,
  CardActions,
} from "@mui/material";
import { vegProducts } from "../../data";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const useStyles = styled({
  dialogPaper: {
    backgroundColor: "transparent",
  },
});

const Vegetables = () => {
  const [{ cartShow }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: !cartShow,
    });
  };
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };
  return (
    <div className="mx-auto mt-5 max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-4 w-full">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-9 mt-10">
        Vegetables
      </h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {vegProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-green-900 rounded-lg overflow-hidden"
          >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-extrabold text-gray-900 font-sans">
                {product.name}
              </h3>
              <p className="text-gray-900 font-normal font-sans">
                {product.price}
              </p>
              <Link to="/">
                <button
                  onClick={() => handleOpen(product)}
                  className="mt-4 px-4 py-2 bg-green-900 text-white text-sm font-semibold font-sans rounded hover:bg-green-800"
                >
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Dialog
          aria-labelledby="responsive-dialog-title mx-auto my-auto"
          open={open}
          onClose={handleClose}
          className="dialog"
        >
          {" "}
          <Card
            className="card h-max"
            sx={{ width: "100%", maxWidth: 384, margin: "auto" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={selectedProduct.imageSrc}
              title={selectedProduct.alt}
              className="object-cover relative w-full"
            />
            <CardContent>
              <div className="card__content flex gap-16">
                <Typography className="text-lg font-extrabold text-black text-center">
                  {selectedProduct.name}
                </Typography>
                <Typography className="text-green-900 text-center font-bold">
                  {selectedProduct.price} per piece
                </Typography>
              </div>
              <Chip
                label=" How do you like your produce? Required"
                variant="outlined"
                className="chip mt-8 w-full font-semibold"
              />
              <div className="flex flex-col items-start">
                <FormGroup className="w-full p-1">
                  <FormControlLabel
                    className="border-b-2 border-green-300 w-full"
                    control={
                      <Checkbox
                        sx={{
                          color: green[800],
                          "&.Mui-checked": {
                            color: green[900],
                          },
                        }}
                      />
                    }
                    label="Uncut"
                  />
                  <FormControlLabel
                    className="border-b-2 border-green-300 w-full my-5"
                    control={
                      <Checkbox
                        sx={{
                          color: green[800],
                          "&.Mui-checked": {
                            color: green[900],
                          },
                        }}
                      />
                    }
                    label="Cut"
                  />
                  <FormControlLabel
                    className="border-b-2 border-green-300 w-full"
                    control={
                      <Checkbox
                        sx={{
                          color: green[800],
                          "&.Mui-checked": {
                            color: green[900],
                          },
                        }}
                      />
                    }
                    label="Frozen"
                  />
                </FormGroup>
              </div>
            </CardContent>
            <CardActions>
              <ButtonGroup
                className="buttongroup mt-2 flex w-max p-1"
                aria-label="Basic button group"
              >
                <Button>-</Button>
                <Button>5</Button>
                <Button>+</Button>

                <Button
                  onClick={showCart}
                  sx={{
                    fontSize: "10px",
                    padding: "8px 16px",
                    "&:hover": {
                      backgroundColor: green[900],
                    },
                  }}
                >
                  Add item(s) to cart
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Dialog>
      )}
    </div>
  );
};
export default Vegetables;
