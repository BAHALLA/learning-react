import React from "react";

function Hero({heroName}) {
    if(heroName === 'Joker') {
        throw new Error('joker is not a hero');
    }
    return (
        <div>
            <h1> { heroName }</h1>
        </div>
    );

}
export default Hero;