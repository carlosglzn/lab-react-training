import React from 'react'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    
    return (
        <div className="creditCard" style={{backgroundColor: `${bgColor}`}}>
        <div className="logo">
            <img src={setType(type)} alt="logo"></img>
        </div>
        <div className="number" style={{color: `${color}`}}>
            <span>•••• •••• •••• </span><span>{number.split('').splice(12,4)}</span>
        </div>
        <div className="data" style={{color: `${color}`}}>
            <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </div>
    </div>
    )
}

function setType(type) {
    if (type === 'Visa') {
        return '/img/visa.png'
    }
    else if (type === 'Master Card') {
        return '/img/master-card.svg'
    }
}