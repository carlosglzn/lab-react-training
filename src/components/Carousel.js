import React, { useState } from 'react'

export const Carousel = (params) => {

    const [image, setImage] = useState({
        src: params.imgs[0],
    })

    const leftClick = () => {
        const index = params.imgs.indexOf(image.src)
        if (index > 0) {
            setImage({
                src: params.imgs[index - 1],
            })
        } else {
            setImage({
                src: params.imgs[params.imgs.length -1],
            })
        }
    }

    const rightClick = () => {
        const index = params.imgs.indexOf(image.src)
        if (index < params.imgs.length -1) {
            setImage({
                src: params.imgs[index + 1],
            })
        } else {
            setImage({
                src: params.imgs[0]
            })
        }
    }

    return (
        <>
            <button onClick={leftClick}>Left</button>
            <img src={image.src}/>
            <button onClick={rightClick}>Right</button>
        </>
    )
}
