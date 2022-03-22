import React, { useState } from "react";
import "./Carousel.css";
import { blogs } from "../Data/myData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



function Carousel(props) {

  // const month = props.date.toLocaleString('en-US', {month:'long'});
  // const day = props.date.toLocaleString('en-US', {day:'2-digit'});
  // const year = props.date.getFullYear();

  // let time = `${day} ${month} ${year}`
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${blogs[currImg].img})` }}>
        <div className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}>
          <ArrowBackIosIcon style={{ fontSize: 60 }} />
        </div>
        <div className="center">
          {/* <h1>{blogs[currImg].time}</h1> */}

          <h1>
          {blogs[currImg].date.toLocaleDateString()}
          </h1>
          <div className="titoo">
          {blogs[currImg].title}
          </div>

          <p>{blogs[currImg].dtext}
          </p>

        </div>
        <div
          className="right"
          onClick={() => {
            currImg < blogs.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 60 }} />
        </div>
      </div>
      <div className="CaroCon">
        {blogs.map((blog, index)=>{
          return <div className={index == currImg? "Active":"Carodot"} key={index}></div>
      })}
      </div>
    </div>
  );
}

export default Carousel;