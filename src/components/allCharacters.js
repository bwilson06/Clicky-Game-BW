import React, { Component } from 'react';
import Character from './character';
import Header from './header'
import '../styles/style.css'

class AllCharacters extends Component {

    state = {
        counter: 0,
        char_id: 0,
        losses: 0,
        score: 0,
        wins: 0
    }
    
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    myFunction = (element, arr) => {
        const newCounter = this.state.counter + 1
        const character_id = element.id
        this.setState({ counter: newCounter })
        this.setState({ char_id: character_id })
        if (character_id === this.state.char_id){
            this.setState({ score: 0 })
            this.shuffle(arr)
            const losses = this.state.losses + 1
            this.setState({ losses: losses })
        }else{
            this.shuffle(arr)
            const newScore = this.state.score + 1
            this.setState({ score: newScore })
            if (this.state.score > 11){
                const newWins = this.state.wins + 1
                this.setState({ wins: newWins })
            }
        }
        
    }
    render() {
        const charArr = this.props.list.characters
        const allCharacters = charArr.map((element) => {
            return (
                <button key={element.id}className="button" onClick={() => { this.myFunction(element, charArr) }}>
                <Character
                name={element.name}
                image={element.src}
                />
                </button>
            )
        })
        console.log(this.props.list.characters)
        return (
            <div className="flex">
                <Header score={this.state.score} losses={this.state.losses} wins={this.state.wins}/>
                {allCharacters}
            </div>
        );
    }
}

export default AllCharacters;