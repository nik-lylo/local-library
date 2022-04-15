import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./sliderBook.scss";
import { Navigation } from "swiper";
import CatalogCard from "../../card/CatalogCard/CatalogCard";
import { IBook } from "../../../../lib/models/IBook";
import { Link } from "react-router-dom";

interface SliderBookProps {
  title: string;
  books: IBook[];
}

const SliderBook: FC<SliderBookProps> = ({ title, books }) => {
  if (!books) {
    return null;
  }

  return (
    <>
      <Link to="" className="slider-book__title _catalog-title">
        About{` `}
        {title}
      </Link>
      <div className="slider-book__underline _catalog-underline"></div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        slidesPerView={4}
        className="slider-book__swiper"
      >
        {books.map((item) => (
          <SwiperSlide key={item.etag}>
            <CatalogCard obj={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderBook;
