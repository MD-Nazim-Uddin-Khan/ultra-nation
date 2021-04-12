import React from 'react';

const Cart = (props) => {
    const cart3 = props.cart2
    // console.log(cart3);
    // let totalPopulation = 0;
    // for (let i = 0; i < cart3.length; i++) {
    //     const country8 = cart3[i];
    //     totalPopulation = totalPopulation + country8.population;  
    // }
    const totalPopulation = cart3.reduce( (sum, country8) => sum + country8.population, 0);
    return (
        <div>
            <h3>This is cart : {cart3.length}</h3>
            <p>Total Population : {totalPopulation}</p>
        </div>
    );
};

export default Cart;