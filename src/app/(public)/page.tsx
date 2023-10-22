import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import img from "@/assets/1218021-1.jpg";
import requist from "@/server";

import "./Page.scss";
import "swiper/css";
import categoryTypes from "@/types/category";
import Link from "next/link";
import Search from "@/components/search/Search";
import { useState } from "react";
import Carusel from "@/components/carusel/Carusel";

const Home = async () => {
  try {
    const { data } = await requist.get<categoryTypes[]>("category");
    console.log(data);
    return (
      <main className="container">
        <div className="carusel-bg">
          <h1 className="text-center">Yangi maxsulot</h1>
          <Carusel />
        </div>
        <div className="todos">
          <div className="category">
            <h1 className="text-center">Maxsulotlar kategoriyasi</h1>
          </div>
        </div>
        <div className="todos-img">
          <div className="row g-3">
            {data.map(({ _id, image, name }) => (
              <div key={_id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <div className="relative" style={{ height: "200px" }}>
                    <Image
                      className="card-img"
                      src={image.url}
                      alt={name}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,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"
                      fill
                    />
                  </div>
                  {/* <button> */}
                  <Link className="btn" href={`/categories/${_id}`}>
                    {name}
                  </Link>
                  {/* </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  } catch (err) {
    throw new Error("Error");
  }
};

export default Home;
