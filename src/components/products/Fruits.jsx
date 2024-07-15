import React, { useState, useEffect } from "react";
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
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { getProducts, getProductById } from "../../services/api";

const useStyles = styled({
  dialogPaper: {
    backgroundColor: "transparent",
  },
});

const Fruits = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({
          organizationId: "da6a6ebdadcc4b5d8be2e83c094274a8",
          reverseSort: false,
          page: 1,
          size: 10,
        });
        setProducts(data.items);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="mx-auto mt-5 max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-4 w-full">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-9">
        Fruits
      </h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-green-900 rounded-lg overflow-hidden"
          >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-extrabold text-gray-900 font-sans">
                {product.name}
                <span className="ml-2">x{product?.available_quantity}</span>
              </h3>
              <Typography className="text-gray-900 font-normal font-sans">
                NGN {product?.current_price?.[0]?.NGN?.[0] || "N/A"}
              </Typography>

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
                className="chip mt-8 py-2 w-full font-semibold bg-green-300"
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
                <Button onClick={decrement}>-</Button>
                <Button>{count}</Button>
                <Button onClick={increment}>+</Button>

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

export default Fruits;
