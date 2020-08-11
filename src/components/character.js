import React from 'react';
import '../styles/style.css'

const Character = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name} className="character"></img>
        </div>
    );
};

export default Character;