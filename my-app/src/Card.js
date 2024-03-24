import React from "react";
import katie from "./katie-zaferes.png";
import star from "./star.png";
function Card() {
  return (
    <div className="card">
      <img src={katie} alt="" className="card--img"></img>
      <div className="rating">
        <img src={star} alt="" className="rating--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p className="card--title">Life lessons from katie</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>

      {/* <div className="card--2">
        <img src={katie} alt="" className="card--img"></img>
        <div className="rating">
          <img src={star} alt="" className="rating--img" />
          <p>4.0</p>
        </div>
        <p className="card--title">Life lessons from katie</p>
        <p className="card--price">From 1550$</p>
      </div> */}
    </div>
  );
}
export default Card;
