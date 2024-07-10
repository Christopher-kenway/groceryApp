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
import carrot from "../../assets/roots/carrot.png";
import carrot2 from "../../assets/roots/carrot2.png";
import cassava from "../../assets/roots/cassava.png";
import cocoyam from "../../assets/roots/cocoyam.png";
import garlic from "../../assets/roots/garlic.png";
import ginger from "../../assets/roots/ginger.png";
import sweetp from "../../assets/roots/sweetp.png";
import tulip from "../../assets/roots/tulip.png";
import tumeric from "../../assets/roots/tumeric.png";
import yam from "../../assets/roots/yam.png";
import onion from "../../assets/roots/onion.png";
import potato from "../../assets/roots/potato.png";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const useStyles = styled({
  dialogPaper: {
    backgroundColor: "white",
  },
});

const Roots = () => {
  const [{ cartShow }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: !cartShow,
    });
  };
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: "Irish Potato",
      href: "#",
      price: "250 NGN",
      imageSrc: potato,
      imageAlt: "Irish Potato",
    },
    {
      id: 2,
      name: "Tulip",
      href: "#",
      price: "3050 NGN",
      imageSrc: tulip,
      imageAlt: "tulip",
    },
    {
      id: 3,
      name: "carrots",
      href: "#",
      price: "1500 NGN",
      imageSrc: carrot,
      imageAlt: "carrot",
    },
    {
      id: 4,
      name: "carrots",
      href: "#",
      price: "100 NGN",
      imageSrc: carrot2,
      imageAlt: "carrots",
    },
    {
      id: 5,
      name: "Cocoyam",
      href: "#",
      price: "3000 NGN",
      imageSrc: cocoyam,
      imageAlt: "Cocoyam",
    },
    {
      id: 6,
      name: "Yam",
      href: "#",
      price: "200 NGN",
      imageSrc: yam,
    },
    {
      id: 7,
      name: "Ginger",
      href: "#",
      price: "350 NGN",
      imageSrc: ginger,
      imageAlt: "Ginger",
    },
    {
      id: 8,
      name: "Tumeric",
      href: "#",
      price: "1950 NGN",
      imageSrc: tumeric,
      imageAlt: "Tumeric",
    },
    {
      id: 9,
      name: "Onions",
      href: "#",
      price: "3000 NGN",
      imageSrc: onion,
      imageAlt: "Onion",
    },
    {
      id: 10,
      name: "cassava",
      href: "#",
      price: "2700 NGN",
      imageSrc: cassava,
      imageAlt: "cassava",
    },
    {
      id: 11,
      name: "Sweet Potatoes",
      href: "#",
      price: "300 NGN",
      imageSrc: sweetp,
      imageAlt: "Sweet Potatoes",
    },
    {
      id: 12,
      name: "garlic",
      href: "#",
      price: "300 NGN",
      imageSrc: garlic,
      imageAlt: "garlic",
    },

    // More products...
  ];
  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };
  return (
    <div className="bg-green-900">
      <div className="mx-auto mt-5 max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-4 w-full">
        <h2 className="text-2xl font-medium tracking-tight text-gray-200 mb-9 mt-10">
          Roots and Tubers
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-lg overflow-hidden bg-gray-100"
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
              className="h-max bg-gray-100"
              sx={{
                width: "100%",
                maxWidth: 384,
                margin: "auto",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={selectedProduct.imageSrc}
                title={selectedProduct.alt}
                className=" object-cover relative w-full"
              />
              <CardContent>
                <div className="bg-gray-100 flex gap-16">
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
    </div>
  );
};
export default Roots;
