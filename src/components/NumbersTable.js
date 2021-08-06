import React from 'react'

export const NumbersTable = (props) => {
    
    const list = () => {
        
        const array = []

        for (let i = 1; i <= props.limit; i++) {
            array.push(i)
        }

        return array
    }
    
    
    return (
        <>
            <ul style={{"list-style-type": "none"}}>
                {
                    list().map((element, index) => (
                        <li key={index} style={{backgroundColor: element % 2 === 0 ? "red" : "white"}}>{element}</li>
                    ))
                }
            </ul>
        </>
    )
}
