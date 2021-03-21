import React from 'react'

export default function Main({adjectif, dishes}) {
    return (
        <section>
            <p>We serve the most {adjectif} algerian food around</p>
            <ul style={{textAlign: "left"}}>
                {dishes.map((dish) => 
                    <li key={dish.id}>{dish.title}</li>
                )}
                
            </ul>
        </section>
    )
}
