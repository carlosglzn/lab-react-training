import React from 'react'

export default function DriverCard({name, rating, img, car}) {
    return (
        <div className="driverCard">
            <div>
                <img src={img}></img>
            </div>
            <div>
                <p>{name}</p>
                <p>{`${setRating(rating)}`}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}


function setRating(rating) {
    switch (Math.round(parseFloat(rating))) {
        case 0:
            return "☆☆☆☆☆"
        case 1:
            return "★☆☆☆☆"
        case 2:
            return "★★☆☆☆"
        case 3:
            return "★★★☆☆"
        case 4:
            return "★★★★☆"
        case 5: 
            return "★★★★★"
    }   
}