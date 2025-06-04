import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./HeroSlider.css";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }} // Set delay to 2 seconds
      modules={[Autoplay]} // Add Autoplay module
    >
      <SwiperSlide>
        <img src="/images/One Piece.jpg" alt="One Piece" />
      </SwiperSlide> 
      <SwiperSlide>
        <img src="/images/Vinland Saga.jpg" alt="Vinland Saga" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Your Name.jpg" alt="Your Name" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Solo" alt="Solo Leveling" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Blue Lock.jpg" alt="Blue Lock" />
      </SwiperSlide> 
    </Swiper>
  );
};

export default HeroSlider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "./HeroSlider.css";

// const HeroSlider = ({ animeList, onSelectAnime }) => {
//   return (
//     <div className="slider-container">
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={3}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         modules={[Autoplay]}
//       >
//         {animeList.map((anime) => (
//           <SwiperSlide key={anime.id} onClick={() => onSelectAnime(anime.id)}>
//             <img src={anime.image} alt={anime.name} className="slider-image" />
//             <div className="anime-name">{anime.name}</div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSlider;
