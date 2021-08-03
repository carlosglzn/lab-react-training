import React from 'react'

export default function Random({min, max}) {

    let random = Math.floor(Math.random() * (max - min) + min)


    return (
        <div className="box">
            <div>
                <p> Random value between {min} and {max} = {random}</p>
            </div>
        </div>
    )
}
