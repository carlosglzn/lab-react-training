import React from 'react'

export default function Greentings(props) {

    let text

    switch(props.lang) {
        case "de":
            text = <p>Hallo {props.children}</p>
            break
        case "en":
            text = <p>Hello {props.children}</p>
            break
        case "es":
            text = <p>Hola {props.children}</p>
            break
        case "fr":
            text = <p>Bonjour {props.children}</p>
    }

    return (
        <div>
            <div className="box">
                {text}
            </div>
        </div>
    )
}
