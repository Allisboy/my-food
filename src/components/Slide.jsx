import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import img1 from '../assets/food.png';
import img2 from '../assets/okra.jfif';
import img3 from '../assets/okra2.jfif';

const Slide=()=>{
    return(
        
        <Swiper className='flex items-center justify-center h-[40dvh]  w-[100dvw]'
        modules={[Autoplay,Pagination,Navigation]}
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        pagination={{clickable:true}}
        loop={true}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={1}
        >
            <SwiperSlide className='w-full h-[40dvh] flex items-center'>
                <img src={img1} className='object-cover w-full'/>
            </SwiperSlide>
            <SwiperSlide className='w-full h-[50dvh] md:h-[90dvh] block'>
                <img src={img2} className='object-cover w-full'/>
            </SwiperSlide>
            <SwiperSlide className='w-full h-[50dvh] md:h-[90dvh] block '>
                <img src={img3} className='object-fit w-full'/>
            </SwiperSlide>
        </Swiper>
        
        
    )
}
export default Slide