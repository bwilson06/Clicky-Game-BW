import React, { Component } from 'react';
import Character from './character';

class AllCharacters extends Component {
    render() {
        const charArr = this.props.list.characters
        const allCharacters = charArr.map((element) => {
            return (
                <Character
                name={element.name}
                image={element.src}
                />
            )
        })
        console.log(this.props.list.characters)
        return (
            <div>
                {allCharacters}
            </div>
        );
    }
}

export default AllCharacters;