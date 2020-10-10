import React from 'react';

import Table from 'react-bootstrap/Table';

class NounsPage extends React.Component {

  constructor(props) {
    super(props);
  }


  getDefinitiveArticle(gender) {
    switch(gender) {
      case 'm':
        return 'der';
      case 'f':
        return 'die';
      case 'n':
        return 'das';
    }
  }

  getColour(gender) {
    switch(gender) {
      case 'm':
        return '#87CEFA';
      case 'f':
        return '#FFC0CB';
      case 'n':
        return '#66CDAA';
    }
  }


  buildRows() {
    let words = this.props.words;

    // Order the words alphabetically
    words.sort((a, b) => {
      return a.en > b.en;
    });


    return (
      words.map(word => {
        return (
          <tr style= { { backgroundColor: this.getColour(word.de.g) }}>
            <td>{ word.en }</td>
            <td>{ this.getDefinitiveArticle(word.de.g) } { word.de.s }</td>
            <td>die { word.de.p }</td>
          </tr>
        );
      })
    );
  }


  /**
   * Renders the Marker component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <h1>{ this.props.title }</h1>

        <Table striped bordered>
          <thead>
            <tr>
              <th>English</th>
              <th>German (singluar)</th>
              <th>German (plural)</th>
            </tr>
          </thead>
          <tbody>
            { this.buildRows() }
          </tbody>
        </Table>
      </>
    );
  }
}
export default NounsPage;