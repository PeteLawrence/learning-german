import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import NounsPage from './pages/NounsPage';
import PronounsPage from './pages/PronounsPage';
import VerbPage from './pages/VerbPage';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

let animals = require('./data/animals.js').default;
let food = require('./data/food.js').default;
let dictionary = require('./data/german.js').default;

function filterDictionary(type, category) {
  let filteredWords = dictionary.words.map(word => {
    if (word.type == type && word.category == category) {
      return word;
    }
  });

  return filteredWords;
}


function App() {
  return (
    <Container>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          
          <Navbar.Brand href="#home">Learning German</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#/">Home</Nav.Link>

              <Nav.Link href="#/articles">Articles</Nav.Link>

              <NavDropdown title="Nouns" id="basic-nav-dropdown">
              <NavDropdown.Item href="#nouns/pronouns">Pronouns</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="#nouns/animals">Animals</NavDropdown.Item>
                <NavDropdown.Item href="#nouns/food">Food</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Verbs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#verbs/sein">Sein / To Be</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/articles">
            <ArticlesPage />
          </Route>

          <Route path="/nouns/pronouns">
            <PronounsPage />
          </Route>


          <Route path="/nouns/animals">
            <NounsPage title='Animals' words = { filterDictionary('noun', 'animal' )} />
          </Route>

          <Route path="/nouns/food">
            <NounsPage title='Food' words = { filterDictionary('noun', 'food' )} />
          </Route>

          <Route path="/verbs/sein">
            <VerbPage/>
          </Route>
        </Switch>

      </Router>

    </Container>
  );
}

export default App;
