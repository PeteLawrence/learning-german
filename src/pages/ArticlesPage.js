import React from 'react';

import Table from 'react-bootstrap/Table';

class ArticlesPage extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Renders the ArticlesPage component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <h1>Articles</h1>

        <h2>Indefinite Article</h2>

        <Table bordered>
          <thead>
            <tr>
              <th>A / One</th>
              <th>Masculine ♂</th>
              <th>Neuter ⚲</th>
              <th>Feminine ♀</th>
              <th>Plural ♂⚲♀</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Nominative</th>
              <td>ein</td>
              <td rowSpan="2">ein</td>
              <td rowSpan="2">eine</td>
              <td rowSpan="2">-eine</td>
              <td>An apple is....</td>
            </tr>
            <tr>
              <th>Accusative</th>
              <td>einem</td>
              <td>Gave him an apple</td>
            </tr>
          </tbody>
        </Table>


        <h2>Definite Article</h2>

        <Table bordered>
          <thead>
            <tr>
              <th>The</th>
              <th>Masculine ♂</th>
              <th>Neuter ⚲</th>
              <th>Feminine ♀</th>
              <th>Plural ♂⚲♀</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Nominative</th>
              <td>der</td>
              <td rowSpan="2">das</td>
              <td rowSpan="2" colSpan="2">die</td>
              <td>The apple is...</td>
            </tr>
            <tr>
              <th>Accusative</th>
              <td>den</td>
              <td>I have the apple</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
export default ArticlesPage;