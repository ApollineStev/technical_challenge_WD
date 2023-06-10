import React from 'react'
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PhoneDetails from './PhoneDetails';


function PhonePage() {
 const [ phones, setPhones] = useState([])
 const [ phoneDetails, setPhoneDetails] = useState([])

 const API_URL = "http://localhost:5005/phones"

 useEffect(() => {
    axios.get(`${API_URL}`)
    .then((response) => {
        setPhones(response.data)
        
    })
    .catch((error) => console.log(error))
 }, [])

 

 

  return (
    <div>{
        phones.map(phone => 
        <Link to={`/phones/${phone.id}`} key={phone.id}>
            <img src={`/images/${phone.imageFileName}`} alt='...' />
            <p>{phone.name}</p>
            <PhoneDetails phones={phones} />
        </Link>
        )
    

    }</div>
  )
}

export default PhonePage