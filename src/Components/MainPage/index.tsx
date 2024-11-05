import {
  // ColorOverlay,
  ContainerMainPage,
  // Content,
  ImgBanner,
} from './styled'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import img from '../../assets/banner1.jpg'
// import imgTwo from '../../assets/ImgCallAction.jpg'

export const MainPage = () => {
  return (
    <ContainerMainPage id="home">
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="ContentSlide">
          <ImgBanner src={img} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide className="ContentSlide">
          <ImgBanner src={imgTwo} alt="" />
          <ColorOverlay />

          <Content>
              <p>Helooo</p>
          </Content>
        </SwiperSlide> */}
      </Swiper>
    </ContainerMainPage>
  )
}
