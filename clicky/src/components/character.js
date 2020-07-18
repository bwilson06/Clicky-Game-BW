import React from 'react';

const Character = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name} style={{maxWidth:100}}></img>
        </div>
    );
};

export default Character;