import React, { useState } from 'react'



export default function LikeButton() {

    const [count, setCount] = useState(0)

    const like = () => {
        setCount(count + 1)
    }

    return (
        <>
           <button
            onClick={() => like()}
           > {count} Likes</button>
        </>
    )
}
