import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = `http://localhost:5005/phones`;

function PhoneDetails() {
   const { id } = useParams()
   const [phone, setPhone] = useState(null)
   const [ newPhone, setNewPhone] = useState([])

   const getSinglePhone = () => {
    axios.get(`${API_URL}/${id}`)
      .then((response) => {
        
        setPhone(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log("no phone", error);
      });
  };

  useEffect(() => {
    getSinglePhone();
  }, []);

   
  return (
    <div>
    {phone && 

    <div>
        <p>{phone.name}</p>
        <img src={`/images/${phone.imageFileName}`} alt='...' />
        <p>description : {phone.description}</p>
        <p>processor: {phone.processor} / RAM : {phone.ram} / screen : {phone.screen}</p>
        <p>manufacturer : {phone.manufacturer}</p>
        <p>color : {phone.color}</p>
        <p>price : {phone.price} euro</p>

        <Link to='/phones'><button>back</button></Link>
        
    </div>
        

    }
        
    </div>
  )
}

export default PhoneDetails