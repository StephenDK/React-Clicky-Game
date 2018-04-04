import React from "react";
// import navbar
import Navbar from './components/Navbar/navbar';

import Game from "./components/Game";

import Footer from './components/Footer';

//const App = () => (
class App extends React.Component {

    state = {
        score: 0,
        topScore: 0
    };

    handleUpdateScore = (score, topScore) => {
        // console.log('App score', score);
        // console.log('App topScore', topScore);
        this.setState({
            // score: score,
            score,
            // topScore: topScore
            topScore
        });
    }

    render() {
        return (
            <div>
                <Navbar 
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Game 
                    updateScore={this.handleUpdateScore}
                />
                <Footer />
            </div>
        );
    }
   
}

export default App;