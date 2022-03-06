import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import firstpic from "../public/1.jpg";
import secondpic from "../public/7.jpg";
import thirdpic from "../public/7.jpg";
import fourthpic from "../public/1.jpg";
import fitfthpic from "../public/7.jpg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const header = () => {
  return (
    <div className="w-full">
      <div className="flex  justify-center">
        <div className="lg:flex lg:gap-8 lg:justify-between lg: px-4">
          <div>
            <Image src={firstpic} alt="Picture of the author" />
          </div>
          <div>
            <Image src={secondpic} alt="Picture of the author" />
          </div>
          <div>
            <Image src={thirdpic} alt="Picture of the author" />
          </div>
          <div>
            <Image src={fourthpic} alt="Picture of the author" />
          </div>
          <div>
            <Image src={fitfthpic} alt="Picture of the author" />
          </div>
        </div>

      </div>

      {/* <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="py-2 rounded drop-shadow-6xl">
          <div
            className="h-screen bg-no-repeat bg-cover bg-center rounded-xl mx-4"
            style={{
              backgroundImage: `url(/2.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 px-4 text-main-3">
              <div className="h-screen flex flex-col justify-center text-main-3 items-center space-y-6">
                <p className="text-4xl text-center rounded-3xl text-white px-8 py-5 bg-main-5/80">სასაჩუქრე კომპანია, ვქმნით სიყვარულით </p>
                
                <p className="text-2xl font-light rounded-3xl px-8 py-3 text-white text-center bg-main-5/80">
                  აჩუქე კრეატიული საჩუქარი
                </p>
                <button
                  type="button"
                  className="text-white  rounded-3xl  px-8 py-3 text-center mr-2 mb-2 bg-main-5/70"
                >
                  დაგვიკავშირდით
                </button>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide> */}
      {/* <SwiperSlide>
          <div className="py-2 rounded drop-shadow-7xl">
            <div
                className="h-screen bg-no-repeat bg-cover rounded-xl bg-center mx-4"
                style={{
                  backgroundImage: `url(/4.jpg)`,
                }}
              >
              <div className="h-screen bg-black bg-opacity-10 px-4 text-main-3">
                <div className="h-screen flex flex-col justify-center text-main-3 items-center space-y-6">
                  <p className="text-4xl text-center rounded-3xl text-white px-8 py-5 bg-main-5/80">სასაჩუქრე კომპანია, ვქმნით სიყვარულით </p>
                  
                  <p className="text-2xl font-light rounded-3xl px-8 py-3 text-white text-center bg-main-5/80">
                    აჩუქე კრეატიული საჩუქარი
                  </p>
                  <button
                    type="button"
                    className="text-white  rounded-3xl  px-8 py-3 text-center mr-2 mb-2 bg-main-5/70"
                  >
                    დაგვიკავშირდით
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      {/* </Swiper> */}
    </div>
  );
};
export default header;
