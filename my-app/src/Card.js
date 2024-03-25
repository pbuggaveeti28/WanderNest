import React from "react";
import star from "./star.png";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="card--img" />
      <div className="rating">
        <img src={star} alt="" className="rating--star" />
        <span>{props.item.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
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
