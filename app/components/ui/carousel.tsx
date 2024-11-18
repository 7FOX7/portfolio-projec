import {Swiper} from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { CarouselProps } from "@/app/lib/definitions"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { PaginationOptions } from "swiper/types";
import "swiper/css"; 
import 'swiper/css/navigation';

function Carousel<T>({items, keys, control, allowGrab, addPadding, renderedItem}: CarouselProps<T>) {
   const options: PaginationOptions = {
      clickable: true, 
      type: 'bullets'
   }
   return (
      <Swiper 
         modules={[Navigation, Pagination, Autoplay]}
         navigation={control === "navigation" ? true : false}
         pagination={control === "pagination" && options}
         autoplay={{
            delay: 8000, 
            disableOnInteraction: false
         }}
         loop={true}
         grabCursor={allowGrab}
         slidesPerView={1} 
         simulateTouch={true}
         spaceBetween={50}
         allowTouchMove={control === "swipe" || allowGrab ? true : false}
      >
         {items.map((item, index) => (
            <SwiperSlide key={keys[index]} className={`${addPadding ? "px-2 md:px-14 xl:px-16" : "px-0"}`}>
               {renderedItem(item)}
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default Carousel