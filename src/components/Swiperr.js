import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Swiperr = () => {

  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        <div>
          <SwiperSlide>
            {" "}
            <div className="w-full h-72 lg:h-[75vh] relative ">
              {" "}
              <div className=" w-full h-full mt-20 absolute text-white text-center z-20">
                {" "}
                <h1 className="text-2xl font-bold font-mono text-white text-center">
                  {" "}
                  WELCOME TO THE DEPARTMENT LIBRARY{" "}
                </h1>
                <p className="font-semibold mt-3">
                  Explore the World of Undergraduate Projects in Educational
                  Technology
                </p>
              </div>{" "}
              <div>

              </div>
              <Image

                src={'/homepic1.png'}
               fill={true}
                alt=""
              />{" "}
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-full h-72 lg:h-[75vh] relative">
              {" "}
              <div className=" w-full h-full mt-20  items absolute text-white text-center z-20">
                {" "}
                <h1 className="text-2xl font-bold font-mono">
                  {" "}
                  EDUCATIONAL TECHNOLOGY PROJECT LIBRARY {" "}
                </h1>
                <p className="font-semibold mt-3">Discover the Cutting-Edge Projects of Our Educational Technology Scholars </p>
              </div>{" "}
              <Image
               
                src={'/homepic2.png'}
                fill={true}
                alt=""
              />{" "}
            </div>{" "}
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Swiperr;
