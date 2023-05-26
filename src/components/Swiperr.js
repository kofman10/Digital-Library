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
    <div className="mx-3 pt-11">
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
            <div className="h-[35vh] w-full relative ">
              {" "}
              <div className=" w-full mt-10 absolute text-white text-center z-20">
                {" "}
                <h1 className="text-2xl font-mono text-white text-center">
                  {" "}
                  WELCOME TO THE DEPARTMENT LIBRARY{" "}
                </h1>
                <p>
                  Explore the World of Undergraduate Projects in Educational
                  Technology
                </p>
                <Link href = '/aboutus' className="cursor-pointer underline" >learn more</Link >
              </div>{" "}
              <Image
                className="h-full w-full  object-cover"
                src={'/firstbackground.jpeg'}
                width={500}
                height={500}
                alt=""
              />{" "}
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[35vh] w-full relative bg-rose-700 bg-opacity-30">
              {" "}
              <div className=" w-full mt-10  items absolute text-white text-center z-20">
                {" "}
                <h1 className="text-2xl font-mono">
                  {" "}
                  EDUCATIONAL TECHNOLOGY PROJECT LIBRARY {" "}
                </h1>
                <p>Discover the Cutting-Edge Projects of Our Educational Technology Scholars </p>
                <div className="cursor-pointer underline">learn more</div>
              </div>{" "}
              <Image
                className="h-full w-full  object-cover object-top"
                src={'/secondbackground.jpeg'}
                width={500}
                height={500}
                alt=""
              />{" "}
                             <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            </div>{" "}
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Swiperr;
