import React from 'react'

export default function Rating({children}) {

    return (
        <div className="rating">
            <p>{`${setRating(children)}`}</p>
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