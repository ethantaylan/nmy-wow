import React from "react";
import BannerBackgroundImg from "../../assets/banner-background.jpg";
import Logo from "../../assets/logo.png";

export const Banner: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerBackgroundImg})` }}
      className="p-12 border-b border-b-zinc-800 flex flex-col items-center justify-center bg-red-50 bg-cover"
    >
      <div className="flex mb-5 justify-center items-center">
        <img className="w-24" src={Logo} />
        <h1 className="text-6xl drop-shadow-xl text-white italic font-bold">
          ENEMY
        </h1>
      </div>

      <h2 className="tracking-widest text-xl">AMATEUR E-ESPORT ORGANIZATION</h2>
    </div>
  );
};
