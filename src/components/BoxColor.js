import React from 'react'

export default function BoxColor({r, g, b}) {

    const divStyle = {
        backgroundColor: `rgb(${[r,g,b]})`
    }



    return (
    <div>
        <div className="box" style={divStyle}>
            <p>rgb({r},{g},{b})</p>
        </div>
    </div>
    )
}
