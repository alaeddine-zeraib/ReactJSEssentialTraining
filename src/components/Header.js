import React from 'react'
import Restaurant from "../images/restaurant.jpg"

export default function Header({name}) {
    return (
        <header>
            <h1>{name}</h1>
            <img src={Restaurant} alt="restaurant"/>
        </header>
    )
}
