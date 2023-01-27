import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import {Pagination} from "swiper";

import reviews from './data'
import Review from "./Review";
import './review.css'

const Reviews = () => {
  return (
    <section id="review">
      <h2>Review</h2>
      <p>
        클라이언트의 리뷰 입니다
      </p>
      <div className='container'>
      <Swiper 
        slidesPerView={1} 
        spaceBetween={30} 
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          reviews.map(review => (
            <SwiperSlide key={review.id}>
              <Review review={review}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}


export default Reviews