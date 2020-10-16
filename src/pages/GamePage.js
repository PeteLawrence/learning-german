import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

let dictionary = require('../data/german.js').default;

class GamePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      nextNoun: this.getNoun()
    }
  }
  
  
  getNoun() {
    let nouns = dictionary.words.filter(word => {
      return (word.type === 'noun');
    });
    
    let chosenIndex = Math.floor(Math.random() * nouns.length);
    let chosenNoun = nouns[chosenIndex];
    
    return chosenNoun;
  }

  getDefinitiveArticle(gender) {
    switch(gender) {
      case 'm':
        return 'der';
      case 'f':
        return 'die';
      case 'n':
        return 'das';
      default:
        return;
    }
  }
  
  checkGuess(guess) {
    let nextNoun = this.getNoun();
    
    this.setState({ guess: guess, previousNoun: this.state.nextNoun, nextNoun: nextNoun });
  }

  

  renderResult() {
    // First time around there's nothing to show
    if ( !this.state.guess ) return;

    let correct = (this.state.guess === this.state.previousNoun.de.g);

    return (
      <Alert variant={ correct ? 'success' : 'danger'}>
        <strong>{ correct ? 'Correct' : 'Wrong'}</strong> -&nbsp;
        { this.getDefinitiveArticle(this.state.previousNoun.de.g)} { this.state.previousNoun.de.s }
      </Alert>
    )
  }
  
  /**
  * Renders the ArticlesPage component
  * @return {[type]} [description]
  */
  render() {
    return (
      <>
      <h1>Game</h1>
      
      { this.renderResult() }
      
      <ButtonGroup>
        <Button variant="primary" onClick={ () => this.checkGuess('m') }>Der</Button>
        <Button variant="danger" onClick={ () => this.checkGuess('f') }>Die</Button>
        <Button variant="success" onClick={ () => this.checkGuess('n') }>Das</Button>
      </ButtonGroup>
      
      &nbsp; <strong>{ this.state.nextNoun.de.s }</strong>
      
      </>
      );
    }
  }
  export default GamePage;