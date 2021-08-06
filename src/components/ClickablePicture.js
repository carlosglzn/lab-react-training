import React, { useState } from 'react'

export const ClickablePicture = () => {

    const [ image, setImage ] = useState('/img/persons/maxence.png')

    const changeImage = () => {
        
        if (image === '/img/persons/maxence.png') {
            setImage('/img/persons/maxence-glasses.png')
        } else if (image === '/img/persons/maxence-glasses.png') {
            setImage('/img/persons/maxence.png')
        }

    }

    return (
        <>
            <button
                onClick={() => changeImage()}
            ><img src={image}/></button>
        </>
    )
}
