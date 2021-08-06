import React, { useState } from 'react'

export const Dice = () => {


    const [random, setRandom] = useState(1)

    const randomNumber = () => {
        return Math.floor(Math.random() * 6 + 1)
    }

    const handleClick = () => {
        if (random) {
            setRandom(null)
            setTimeout(() => {
                setRandom(randomNumber())
            }, 1000)
        }
    }

    const getDice = () => {
        if (random) {
            return `/img/dice${random}.png`
        } else {
            return `/img/dice-empty.png`
        }
    }

    return (
        <>
            <img src={getDice()} onClick={() => handleClick()} width="200px"/>
        </>
    )
}
