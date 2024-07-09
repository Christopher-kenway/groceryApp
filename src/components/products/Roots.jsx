import React from "react";
import redapple from "../../assets/fruits/redapple.png";
import greenapple from "../../assets/fruits/greenapple.png";
import banana from "../../assets/fruits/Banana.png";
import tomato from "../../assets/fruits/tomato.png";
import corn from "../../assets/fruits/corn.png";
import cucumber from "../../assets/fruits/cucumber.png";
import greenlemon from "../../assets/fruits/greenlemon.png";
import yellowlemon from "../../assets/fruits/yellowlemon.png";
import watermelon from "../../assets/fruits/watermelon.png";
import orange from "../../assets/fruits/orange.png";
import strawberries from "../../assets/fruits/strawberries.png";
import avocado from "../../assets/fruits/avocado.png";
import kiwi from "../../assets/fruits/kiwi.png";
import redcherry from "../../assets/fruits/redcherry.png";
import peach from "../../assets/fruits/peach.png";
import greenbellpepper from "../../assets/fruits/greenbellpepper.png";
import redbellpepper from "../../assets/fruits/redbellpepper.png";
import yellowbellpepper from "../../assets/fruits/yellowbellpepper.png";
import greengrape from "../../assets/fruits/greengrape.png";
import redgrape from "../../assets/fruits/redgrape.png";

const Fruits = () => {
  const products = [
    {
      id: 1,
      name: "Red Apples x1",
      href: "#",
      price: "400 NGN",
      imageSrc: redapple,
      imageAlt: "red apples",
    },
    {
      id: 2,
      name: "Green Apples x1",
      href: "#",
      price: "350 NGN",
      imageSrc: greenapple,
      imageAlt: "greenapple",
    },
    {
      id: 3,
      name: "Banana",
      href: "#",
      price: "150 NGN",
      imageSrc: banana,
      imageAlt: "BANANA",
    },
    {
      id: 4,
      name: "Tomato",
      href: "#",
      price: "100 NGN",
      imageSrc: tomato,
      imageAlt: "TOMATO",
    },
    {
      id: 5,
      name: "Corn",
      href: "#",
      price: "3000 NGN",
      imageSrc: corn,
      imageAlt: "CORN",
    },
    {
      id: 6,
      name: "Cucumber",
      href: "#",
      price: "200 NGN",
      imageSrc: cucumber,
      imageAlt: "cucumber",
    },
    {
      id: 7,
      name: "Green Lemons",
      href: "#",
      price: "350 NGN",
      imageSrc: greenlemon,
      imageAlt: "greenlemon",
    },
    {
      id: 8,
      name: "Watermelon",
      href: "#",
      price: "1950 NGN",
      imageSrc: watermelon,
      imageAlt: "WATERMELON",
    },
    {
      id: 9,
      name: "Orange",
      href: "#",
      price: "3000 NGN",
      imageSrc: orange,
      imageAlt: "Orange",
    },
    {
      id: 10,
      name: "Yellow lemons",
      href: "#",
      price: "500NGN",
      imageSrc: yellowlemon,
      imageAlt: "yellowlemons",
    },
    {
      id: 11,
      name: "Strawberries",
      href: "#",
      price: "300 NGN",
      imageSrc: strawberries,
      imageAlt: "strawberries",
    },
    {
      id: 12,
      name: "Avocado",
      href: "#",
      price: "300 NGN",
      imageSrc: avocado,
      imageAlt: "avocado",
    },
    {
      id: 13,
      name: "Kiwi",
      href: "#",
      price: "1800 NGN",
      imageSrc: kiwi,
      imageAlt: "kiwi",
    },
    {
      id: 14,
      name: "Red Cherry",
      href: "#",
      price: "3000 NGN",
      imageSrc: redcherry,
      imageAlt: "redcherry",
    },
    {
      id: 15,
      name: "Peach",
      href: "#",
      price: "1250 NGN",
      imageSrc: peach,
      imageAlt: "peach",
    },
    {
      id: 16,
      name: "Green Bell Pepper",
      href: "#",
      price: "500 NGN",
      imageSrc: greenbellpepper,
      imageAlt: "greenbellpepper",
    },
    {
      id: 17,
      name: "Red Bell Pepper",
      href: "#",
      price: "700 NGN",
      imageSrc: redbellpepper,
      imageAlt: "redbellpepper",
    },
    {
      id: 18,
      name: "Yellow Bell Pepper",
      href: "#",
      price: "750 NGN",
      imageSrc: yellowbellpepper,
      imageAlt: "yellowbellpepper",
    },
    {
      id: 19,
      name: "Green Grape",
      href: "#",
      price: "2000 NGN",
      imageSrc: greengrape,
      imageAlt: "greengrape",
    },
    {
      id: 20,
      name: "Red Grape",
      href: "#",
      price: "1950 NGN",
      imageSrc: redgrape,
      imageAlt: "redgrape",
    },
    // More products...
  ];

  return (
    <div className="bg-green-900">
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
              <button className="mt-4 px-4 py-2 bg-green-900 text-white text-sm font-semibold font-sans rounded hover:bg-green-800">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
