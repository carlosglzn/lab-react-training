import React from 'react'
import profiles from '../berlin.json';


export const Facebook = () => {



    return (
        <>
        {
            profiles.map((item, index) => (
                <button>{item.country}</button>
            ))
        }
          {
              profiles.map((item, index) => (
                  <div style={{borderStyle: "solid"}}>
                      <img src={item.img}/>
                      <h3><b>First name:</b> {item.firstName}</h3>
                      <h3><b>Last name:</b> {item.lastName}</h3>
                      <h3><b>Country:</b> {item.country}</h3>
                      <h3><b>Type:</b> {item.isStudent === true ? 'Student' : 'Teacher'}</h3>
                  </div>
              ))
          }  
        </>
    )
}
