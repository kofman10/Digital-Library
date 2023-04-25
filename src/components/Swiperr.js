import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useState } from "react";

const Swiperr = () => {
 const [show1, setShow1] = useState(false)
 const [show2, setShow2] = useState(false)
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
            <div className="h-[50vh] w-full relative ">
              {" "}
              <div className=" w-full mt-10 absolute text-white text-center">
                {" "}
                <h1 className="text-2xl font-mono text-white text-center">
                  {" "}
                  WELCOME TO THE DEPARTMENT LIBRARY{" "}
                </h1>
                <p>
                  Explore the World of Undergraduate Projects in Educational
                  Technology
                </p>
                <div className="cursor-pointer underline" onClick={() => setShow1(!show1)}>learn more</div>
              { show1 && <p>Our digital library is dedicated to providing easy access to undergraduate projects from the Educational Technology Department. With our user-friendly platform, you can quickly and easily browse, search, and download research projects.</p> }
              </div>{" "}
              <img
                className="h-full w-full  object-cover"
                src="https://media.istockphoto.com/id/1314585958/photo/african-american-teacher-shows-cards-with-letters-to-screen.jpg?s=612x612&w=0&k=20&c=8kfLli1GgG9_xNwCgGd_22CDZNYPgTzsBXeo96zYHnQ="
                alt=""
              />{" "}
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[50vh] w-full relative bg-rose-700 bg-opacity-30">
              {" "}
              <div className=" w-full mt-10  items absolute text-white text-center">
                {" "}
                <h1 className="text-2xl font-mono">
                  {" "}
                  EDUCATIONAL TECHNOLOGY PROJECT LIBRARY {" "}
                </h1>
                <p>Discover the Cutting-Edge Projects of Our Educational Technology Scholars </p>
                <div className="cursor-pointer underline" onClick = {() => setShow2(!show2)}>learn more</div>
               {show2 && <p>Our digital library provides access to high-quality Educational Technology undergraduate projects that can help you with your research, assignments, or coursework. We thoroughly vet all our projects to ensure their accuracy and relevance.</p> }
              </div>{" "}
              <img
                className="h-full w-full  object-cover object-top"
                src="https://media.istockphoto.com/id/1401177650/photo/young-girl-with-curly-hair-holding-books-in-her-hands-inside-the-library-cute-girl-doing.jpg?s=612x612&w=0&k=20&c=I6YukVQY4Q969vNEgjv5ZxvbxfO_SJq_hH5M3PoXYTo="
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
