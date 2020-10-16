import React from 'react';

import Table from 'react-bootstrap/Table';

class GreetingsPage extends React.Component {

  renderRows() {
    let data = [
      { en: 'hello', de: 'Hallo' },
      { en: 'good morning', de: 'guten Morgen' },
      { en: 'good day', de: 'guten Tag' },
      { en: 'good evening', de: 'guten Ahbend' },
      { en: 'good night', de: 'gute Nacht' },
      { en: 'see you soon', de: 'bis bald' },
      { en: 'see you later', de: 'bis später' },
      { en: 'see you tomorrow', de: 'bis morgen' },
      { en: 'see you shortly', de: 'bis gleich' },
      { en: 'bye', de: 'tschüß' },
      { en: 'goodbye', de: 'auf wiedersehen' },
      { en: 'bitte', de: 'please / pardon / you\'re welcome' },

    ];

    return data.map(word => {
      return (
        <tr key={ word.en }>
          <td>{ word.en }</td>
          <td>{ word.de }</td>
        </tr>
      );
    });
  }

  /**
   * Renders the ArticlesPage component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <h1>Greetings</h1>

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