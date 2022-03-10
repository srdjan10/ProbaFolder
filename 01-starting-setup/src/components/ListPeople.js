import React, { useState } from "react";
import classes from '../components/Card.module.css';
import Card from "./Card";

const ListPeople =(props)=>{

return(
  <Card>
    <li className={classes.card2}>
      <h2>{props.name}</h2>
      <h3>{props.username}</h3>
      <p>{props.email}</p>
      </li>
    </Card>
);
};
export default ListPeople;