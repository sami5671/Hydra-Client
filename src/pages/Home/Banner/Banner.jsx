import React from "react";
import arrow from "../../../assets/images/arror.png";
import bannerImg from "../../../assets/images/bannerImg.png";
import Container from "../../../components/Container/Container";

const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-12">
        <div className="1/2">
          <div className="text-5xl font-semibold base-gradient-text">
            <h1>
              Dive<span className="base-color-text "> Into The Depths</span>
            </h1>
            <h1 className="mt-3">
              <span className="base-color-text">Of</span> Virtual Reality
            </h1>
          </div>
          <div className="w-1/2 mt-10">
            <p className="text-pretty">
              Experience the future with virtual reality! Dive into immersive
              digital worlds that blur the line between reality and imagination.
              Explore breathtaking landscapes, engage in lifelike simulations,
              and connect like never before.
            </p>
          </div>
          <div className="flex items-center mt-10">
            <button className="base-gradient-color px-6 py-2 rounded-full">
              BUILD YOUR WORLD
            </button>
            <button>
              <img src={arrow} className="animate-pulse" alt="" />
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={bannerImg}
            className="drop-shadow-2xl lg:w-[800px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
