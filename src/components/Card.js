import React from "react";
import data from "../data";
import location from "../images/location.png"
import "./Card.css"


function Card(props){
    return(

            <div className="card">
                
                <div className="card-img-area">
                    <img className="card-img" src={props.data.imageUrl} alt="card-img" />
                </div>


                <div className="card-item">

                    <div className="location-div">
                        <img className="logo-location" src={location} alt="logo-location"/>
                        <p className="location">{props.data.location}</p>
                        <a className="google-maps-url" href={props.data.googleMapsUrl} target="_blank"> View on Google Maps</a>
                    </div>

                    <h1 className="title">{props.data.title} </h1>
                    <p className="date">{props.data.startDate} - {props.data.endDate}</p>
                    <p className="description">{props.data.description}</p>

                </div>
            
            </div>



    );
}

export default Card;