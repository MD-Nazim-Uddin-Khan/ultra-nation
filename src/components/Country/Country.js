import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country6
    // const {name, population, region, flag} = props.country
    const flagStyle ={
        height: '50px'
    }
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px'
    }
    // console.log(props);
    const handleAddCountry = props.handleAddCountry6;
    // const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is a {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <button onClick={() => handleAddCountry(props.country6)}>Add Country</button>
        </div>
    );
};

export default Country;