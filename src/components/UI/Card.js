import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const classComing = `${props.className} ${classes.card}`;
  return <div className={classComing}>{props.children}</div>;
};

export default Card;
