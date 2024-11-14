import {Swiper} from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { CarouselProps } from "@/app/lib/definitions"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { PaginationOptions } from "swiper/types";
import "swiper/css"; 
import 'swiper/css/navigation';

function Carousel<T>({items, keys, control, allowGrab, renderedItem}: CarouselProps<T>) {
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
         allowTouchMove={control === "swipe" || allowGrab ? true : false}
      >
         {items.map((item, index) => (
            <SwiperSlide key={keys[index]}>
               {renderedItem(item)}
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default Carousel