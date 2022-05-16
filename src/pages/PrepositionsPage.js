import React from 'react';

import Table from 'react-bootstrap/Table';
import dictionary from '../data/german.js';

class GreetingsPage extends React.Component {

  renderRows() {
    let prepositions = dictionary.words.filter(word => {
      return word.type === 'preposition';
    });

    console.log(prepositions);


    let rows = prepositions.map(word => {
      return (
        <tr key={ word.en }>
          <td>{ word.en }</td>
          <td>{ word.de.s }</td>
        </tr>
      );
    });

    return rows;
  }

  /**
   * Renders the ArticlesPage component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <h1>Prepositions</h1>

        <Table bordered>
          <thead>
            <tr>
              <th><span role="img" aria-label="English">🇬🇧</span></th>
              <th><span role="img" aria-label="German">🇩🇪</span></th>
            </tr>
          </thead>
          <tbody>
            { this.renderRows() }
          </tbody>
        </Table>
      </>
    );
  }
}
export default GreetingsPage;