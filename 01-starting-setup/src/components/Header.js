import classes from '../components/Header.module.css'
import webp from '../picture/web-developer.jpg'
import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'; 

const Header =()=>{   
  const [ip, setIP] = useState('');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }

 useEffect( () => {
    getData()
  }, [])  
    return(
        <div className={classes.header}>
            <h1>RYZEN WEB DEVELOPMENT</h1>
            <p>Your IP address:<br></br>{ip}</p>
            <p>ul. Mutapova br.32</p>
      <picture>
        <img className={classes['main-image']} src={webp} alt="Neki drugi poslovni svet..."/>
      </picture>
       </div>
    );
    };
export default Header;