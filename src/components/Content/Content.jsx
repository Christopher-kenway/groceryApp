import React from "react";
import content from "../../assets/content.png";
import carousel2 from "../../assets/carousel2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Content.css";

const Content = () => {
  return (
    <div>
      <div
        className="mt-3 px-6 lg:py-10 relative isolate bg-cover bg-no-repeat border-t-2 border-b-2 border-green-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${content})`,
        }}
      >
        <div className="px-20 lg:px-20 sm:py-32 lg:py-50">
          <div className="herosection-info text-left">
            <h1 className="text-7xl font-normal tracking-wider text-gray-100 sm:text-5xl">
              Eriqueenah's Online Green Grocery Shop
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-100 font-sans font-medium">
              Eriqueenah is the leading online organic grocery sale and delivery
              service in Nigeria. Order online from hundreds of fruits and
              vegetables and receive same-day free delivery. Visit your favorite
              online green grocery store and get the best food shopping offers
              compared to any other online supermarket in Nigeria. This online
              grocery store in Lagos is great for grocery shopping and home
              delivery service. Online grocery shopping should be easy and
              that's what we do effortlessly at Eriqueenah - we ensure that in
              our online grocery store, you not only get great and organic
              produce but also the kind of excellent service and healthy
              standards you expect in an online food store. Shop with us to get
              the best prices and discounts on farm produce when you do your
              online grocery shopping in Lagos or from anywhere in Nigeria.
            </p>
          </div>
        </div>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={5000}
        className="mt-16 mx-auto"
      >
        <div>
          <img className="object-cover" src={carousel2} alt="Juiced Option 1" />
        </div>
        <div>
          <img
            className="h-50% w-50% object-cover"
            src={carousel2}
            alt="Juiced Option 2"
          />
        </div>
        <div>
          <img
            className="h-50% w-50% object-cover"
            src={carousel2}
            alt="Juiced Option 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Content;
