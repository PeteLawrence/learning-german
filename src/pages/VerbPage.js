import React from 'react';

import Table from 'react-bootstrap/Table';

class NounsPage extends React.Component {

  /**
   * Renders the Marker component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <h1>Sein</h1>

        <Table striped bordered>
          <tbody>
            <tr>
              <th>I am</th>
              <th>ich</th>
              <td>bin</td>
            </tr>
            <tr>
              <th>You (informal) are</th>
              <th>du</th>
              <td>bist</td>
            </tr>
            <tr>
              <th>He/She/It is</th>
              <th>er/sie/es</th>
              <td>ist</td>
            </tr>
            <tr>
              <th>We are</th>
              <th>wir</th>
              <td>sind</td>
            </tr>
            <tr>
              <th>You all are</th>
              <th>ihr</th>
              <td>seid</td>
            </tr>
            <tr>
              <th>You (formal) / They are</th>
              <th>Sie/sie</th>
              <td>sind</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
export default NounsPage;