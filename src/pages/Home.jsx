import React from "react";
import Navbar from "../components/Navbar";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import CardsTitle from "../components/CardsTitle";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <div className="hero relative h-screen ">
        <img
          src="./hero_banner.jpg"
          alt="heroImg"
          className="w-full h-screen object-cover  mask-l-from-1% "
        />
        <div className="hero-content absolute w-full h-full flex flex-col justify-between pb-20 bottom-0">
          <div className="flex flex-col gap-6 mt-[30vh] ml-20">
            <img src={hero_title} alt="" width={"500"} />
            <p className="text-lg text-gray-300 w-[40%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              velit autem, ipsa dicta consectetur facilis perferendis suscipit
              impedit similique, ipsum veniam amet explicabo nisi minus nihil
              recusandae nam nobis minima.
            </p>
            <div className="flex w-full">
              <button className="bg-white text-black px-6 py-2 mr-4 flex items-center gap-2 font-semibold rounded hover:bg-gray-300 transition cursor-pointer">
                <img src={play_icon} alt="playbtn" width={25} />
                Play
              </button>
              <button className="bg-[#6d6d6eb3] text-white px-6 py-2 flex items-center gap-2 font-semibold rounded hover:bg-gray-600 transition cursor-pointer">
                <img src={info_icon} alt="infobtn" width={25} />
                More Info
              </button>
            </div>
          </div>

          <div className="w-full pl-20 ">
            <CardsTitle />
          </div>
        </div>
      </div>
      <div className="more-cards pl-20">
        <CardsTitle title={"Blockbuster Movies"} category={"top_rated"} />
        <CardsTitle title={"Only on Netflix"} category={"popular"} />
        <CardsTitle title={"Upcoming"} category={"upcoming"} />
        <CardsTitle title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
