
import { CommentsHeader, ContainerComments } from "./styled"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules'
import { TextRegular, TitleText } from "../typograph";

import 'swiper/css';
import 'swiper/css/pagination'
import { Rating, Stack } from "@mui/material";



export const Comments = () => {
  return (
    <ContainerComments>
      <TitleText size="l" weight={400} color="white">O que dizem sobre a Aguaviva</TitleText>
      <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
      >
          <SwiperSlide className="ContentSlide">
            <CommentsHeader>
              <TextRegular size="sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Deleniti quo iure modi, molestiae, officia, impedit voluptatem 
                ad eos nobis debitis dolorum! Impedit, minus id cupiditate 
                debitis praesentium distinctio a excepturi?
            </TextRegular>
            </CommentsHeader>
            <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
            </Stack>
            <TextRegular weight={600}>Name</TextRegular>
          </SwiperSlide>
          <SwiperSlide className="ContentSlide">
            <CommentsHeader>
              <TextRegular size="sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Deleniti quo iure modi, molestiae, officia, impedit voluptatem 
                ad eos nobis debitis dolorum! Impedit, minus id cupiditate 
                debitis praesentium distinctio a excepturi?
            </TextRegular>
            </CommentsHeader>
            <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
            </Stack>
            <TextRegular weight={600}>Name</TextRegular>
          </SwiperSlide>
          <SwiperSlide className="ContentSlide">
            <CommentsHeader>
              <TextRegular size="sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Deleniti quo iure modi, molestiae, officia, impedit voluptatem 
                ad eos nobis debitis dolorum! Impedit, minus id cupiditate 
                debitis praesentium distinctio a excepturi?
            </TextRegular>
            </CommentsHeader>
            <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
            </Stack>
            <TextRegular weight={600}>Name</TextRegular>
          </SwiperSlide>
          <SwiperSlide className="ContentSlide">
            <CommentsHeader>
              <TextRegular size="sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Deleniti quo iure modi, molestiae, officia, impedit voluptatem 
                ad eos nobis debitis dolorum! Impedit, minus id cupiditate 
                debitis praesentium distinctio a excepturi?
            </TextRegular>
            </CommentsHeader>
            <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
            </Stack>
            <TextRegular weight={600}>Name</TextRegular>
          </SwiperSlide>
          <SwiperSlide className="ContentSlide">
            <CommentsHeader>
              <TextRegular size="sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Deleniti quo iure modi, molestiae, officia, impedit voluptatem 
                ad eos nobis debitis dolorum! Impedit, minus id cupiditate 
                debitis praesentium distinctio a excepturi?
            </TextRegular>
            </CommentsHeader>
            <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
            </Stack>
            <TextRegular weight={600}>Name</TextRegular>
          </SwiperSlide>
          <SwiperSlide className="ContentSlide">
            <CommentsHeader>
              <TextRegular size="sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Deleniti quo iure modi, molestiae, officia, impedit voluptatem 
                ad eos nobis debitis dolorum! Impedit, minus id cupiditate 
                debitis praesentium distinctio a excepturi?
            </TextRegular>
            </CommentsHeader>
            <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
            </Stack>
            <TextRegular weight={600}>Name</TextRegular>
          </SwiperSlide>
      </Swiper>
    </ContainerComments>
  )
}