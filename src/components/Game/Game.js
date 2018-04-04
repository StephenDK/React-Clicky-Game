import React, { Component } from "react";
import data from '../../data.json';
import img from './background.png';
import './game.css';

class Game extends Component {
  state = {
    characters: data,
    clicked: {},
    score: 0,
    topScore: 0
  };

  handleClick = id => {
      console.log(id);
      
      // TODO: add scoring mechanism
      let clicked = this.state.clicked;
      
        if (clicked[id]) {
            console.log('Already clicked!');
            this.props.updateScore(0, this.state.topScore);
            this.setState({
                clicked: {},
                score: 0,
                topScore: 0,
            });
        } else {
            // console.log('Nice!');
            clicked[id] = true;
            // add one to score state
            let newScore = this.state.score + 1;
            this.setState({ score: newScore });
            console.log('score', newScore);
            // add 1 to top score state
            this.setState({ topScore: this.state.topScore + 1 }, () => {
                console.log('top score: ' + this.state.topScore);
                this.props.updateScore(newScore, this.state.topScore);
            });
            
            this.shuffleCharacters();
             
        }
        this.setState({ clicked });
        console.log('clicked', clicked);

      
  };

  shuffleCharacters = () => {
    let characters = shuffle(this.state.characters);
    this.setState({ characters });
  };

  render() {
    return (
      <div className='container'
      style={{backgroundImage: `url(${img})`}}
      >
        <div className='gameBoard'>
        {
            
            this.state.characters.map((character, i) => {
                //console.log('character', character);
                return (
                    <span key={character.id}>
                        <img
                            //src="bowser.jpg"
                            //src={require('./images/bowser.jpg')}
                            src={character.image}
                            alt={character.id}
                            style={{
                                border: '1px solid gray',
                                height: '200px',
                                margin: '10px',
                                padding: '2px',
                                marginLeft: '20px',
                                borderStyle:' inset',
                                
                            }}
                            onClick={() => { this.handleClick(character.id) }}
                        />
                        {
                            ((i + 1) % 3 === 0) && <br />
                        }
                    </span>
                );
            })
        }
        </div>
      </div>
    );
  }
}

export default Game;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}