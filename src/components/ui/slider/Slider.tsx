"use client"
import {Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
import "swiper/css"
import styles from "@/features/cardsProject/cardsProject.module.css";
import CardProject from "@/features/cardProject/CardProject";
import dataProject from "@/assets/locales/fr.json";


export default function Slider(){


    const data = dataProject.project


    return (<>

        <Swiper
            spaceBetween={80}
            slidesPerView={5}
            freeMode={true}
            speed={3000}


            loop={true}
            modules={[Autoplay]}
            autoplay={{delay: 1, disableOnInteraction: false, pauseOnMouseEnter: true}} >
            {data.map((d)=>(
              <SwiperSlide key={d.id}> <CardProject  dataCard ={d}/></SwiperSlide>
            ))}

        </Swiper>

    </>)
}