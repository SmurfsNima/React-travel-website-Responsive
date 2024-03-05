import Carditem from "./Carditem";
import React from "react";
import "./Cards.css";
import image from "../assets/images/img-2.jpg";
import image2 from "../assets/images/loc1.jpg";
import image3 from "../assets/images/loc2.jpg";
import image4 from "../assets/images/loc4.jpg";
import image5 from "../assets/images/loc5.jpg";
import image6 from "../assets/images/loc6.webp";
import image7 from "../assets/images/loc7.webp";
import image8 from "../assets/images/loc8.webp";
import image9 from "../assets/images/loc9.webp";
const Cards = () => {

  return (
    <div className="cards">
      <h1>تورهای پرطرفدار</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">

            <Carditem
              src={image2}
              text="تور 7 روزه  قبرس شمالی  با فری‌برد ویژه نوروز"
              path="/services"
            />
            <Carditem
              src={image3}
              text="تور 4 روز فرانسه ویژه تعطیلات خرداد"
              path="/services"
            />
          </ul>
          <ul className="cards__items">

            <Carditem
              src={image4}
              text="تور 7 روزه  استانبول  با قشم ایر ویژه نوروز"
              path="/services"
            />
            <Carditem
              src={image5}
              text="تور روسیه (مسکو سن پترزبورگ) 2 فروردین 1403"
              path="/services"
            />
            <Carditem
              src={image6}
              text="تور روسیه (مسکو سن پترزبورگ) 28 اسفند 1402"
              path="/services"
            />
          </ul>
          <ul className="cards__items">

            <Carditem
              src={image7}
              text="تور 13روزه پوکت و کوالالامپور و سنگاپور نوروز 1403"
              path="/services"
            />
            <Carditem
              src={image8}
              text="تور دبی نوروز 1403 (6شب)"
              path="/services"
            />
            <Carditem
              src={image9}
              text="تور 9شب سریلانکا (کلمبو کندی بنتوتا) نوروز 1403"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
