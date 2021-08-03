import React from 'react'

export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="card">
            <div>
                <img src={picture}></img>
            </div>
            <div>
                <p><b>First Name:</b> {firstName}</p>
                <p><b>Last Name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}m</p>
                <p><b>Birth:</b> {birth}</p>
            </div>
        </div>
    )
}




