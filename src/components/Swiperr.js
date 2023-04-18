import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade,  Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Swiperr =  () => {
  return (
    <div className='mx-3 pt-11'> 
  
    <Swiper 
      // install Swiper modules
      modules={[EffectFade,  Autoplay]}
      effect={"fade"}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
    >
      <div>
       <SwiperSlide>  <div className='h-[50vh] w-full relative '> <div className = ' w-full mt-10  items flex justify-center absolute'> <p className = 'text-2xl font-mono text-white text-center'> WELCOME TO EDTECH PROJECT LIBRARY </p></div> <img className='h-full w-full  object-cover' src='https://media.istockphoto.com/id/1314585958/photo/african-american-teacher-shows-cards-with-letters-to-screen.jpg?s=612x612&w=0&k=20&c=8kfLli1GgG9_xNwCgGd_22CDZNYPgTzsBXeo96zYHnQ=' alt="" /> </div> </SwiperSlide>
      <SwiperSlide>  <div className='h-[50vh] w-full relative bg-rose-700 bg-opacity-30'> <div className = ' w-full mt-10  items flex justify-center absolute'> <p className = 'text-2xl font-mono text-white text-center'> EDTECH PROJECT LIBRARY </p></div> <img className = 'h-full w-full  object-cover object-top' src= 'https://media.istockphoto.com/id/1401177650/photo/young-girl-with-curly-hair-holding-books-in-her-hands-inside-the-library-cute-girl-doing.jpg?s=612x612&w=0&k=20&c=I6YukVQY4Q969vNEgjv5ZxvbxfO_SJq_hH5M3PoXYTo=' alt="" /> </div>  </SwiperSlide>
      </div>      
    </Swiper>
    </div>
  );
};

export default Swiperr