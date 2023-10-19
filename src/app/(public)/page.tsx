import "./Page.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import img from "@/assets/1218021-1.jpg";

import "swiper/css";

export default function Home() {

  return (
    <main className="container">
      <div className="carusel-bg">
        <h1 className="text-center">Yangi maxsulot</h1>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
      </div>
      <div className="todos">
        <div className="category">
          <h1 className="text-center">Maxsulotlar kategoriyasi</h1>
        </div>
      </div>
      <div className="todos-img">
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Image
                className="card-img"
                src={img}
                width={400}
                alt="Picture of the author"
              />
              <button className="btn">Shampun</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
