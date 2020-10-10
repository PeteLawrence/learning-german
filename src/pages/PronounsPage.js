import React from 'react';

import Table from 'react-bootstrap/Table';

class PersonalPronounsPage extends React.Component {

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
        <h1>Pronouns</h1>

        <h2>Personal Pronouns</h2>

        <Table bordered>
          <thead>
          <tr>
              <td></td>
              <td>1st person singular</td>
              <td>2nd person singular, informal</td>
              <td>3rd person singular, m</td>
              <td>3rd person singular, f</td>
              <td>3rd person singular, n</td>
              <td>2nd person plural</td>
              <td>3rd person plural</td>
              <td>2nd person formal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="2">Nominative</th>
              <th>I</th>
              <th>You</th>
              <th>He</th>
              <th>She</th>
              <th>It</th>
              <th>We</th>
              <th>Y'all</th>
              <th>They/You</th>
            </tr>
            <tr>
              <td>ich</td>
              <td>du</td>
              <td>er</td>
              <td>sie</td>
              <td>es</td>
              <td>wir</td>
              <td>ihr</td>
              <td>sie/Sie</td>
            </tr>

            <tr>
              <th rowSpan="2">Accusative</th>
              <th>Me</th>
              <th>You</th>
              <th>Him</th>
              <th>Her</th>
              <th>It</th>
              <th>Us</th>
              <th>Y'all</th>
              <th>Them/You</th>
            </tr>
            <tr>
              <td>mich</td>
              <td>dich</td>
              <td>ihn</td>
              <td>sie</td>
              <td>es</td>
              <td>uns</td>
              <td>euch</td>
              <td>sie/Sie</td>
            </tr>

            <tr>
              <th rowSpan="2">Dative</th>
              <th>Me</th>
              <th>You</th>
              <th>Him</th>
              <th>Her</th>
              <th>It</th>
              <th>Us</th>
              <th>Y'all</th>
              <th>Them/You</th>
            </tr>
            <tr>
              <td>mir</td>
              <td>dir</td>
              <td>ihm</td>
              <td>ihr</td>
              <td>ihm</td>
              <td>uns</td>
              <td>euch</td>
              <td>ihnen</td>
            </tr>
          </tbody>
        </Table>

        <h2>Possessive Pronouns</h2>

        <Table bordered size="sm">
          <thead>
            <tr>
              <th colSpan="2"></th>
              <th>ich</th>
              <th>du</th>
              <th>er</th>
              <th>sie</th>
              <th>es</th>
              <th>wir</th>
              <th>ihr</th>
              <th>Sie/sie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="4">Nominative</th>
              <th>masculine</th>
              <td>mein</td>
              <td>dein</td>
              <td>sein</td>
              <td>ihr</td>
              <td>sein</td>
              <td>unser</td>
              <td>euer</td>
              <td>Ihr/ihr</td>
            </tr>
            <tr>
              <th>feminine (+e)</th>
              <td>meine</td>
              <td>deine</td>
              <td>seine</td>
              <td>ihre</td>
              <td>seine</td>
              <td>unsere</td>
              <td>euere</td>
              <td>Ihre/ihre</td>
            </tr>
            <tr>
              <th>neuter</th>
              <td>mein</td>
              <td>dein</td>
              <td>sein</td>
              <td>ihr</td>
              <td>sein</td>
              <td>unser</td>
              <td>euer</td>
              <td>Ihr/ihr</td>
            </tr>
            <tr>
              <th>plural (+e)</th>
              <td>meine</td>
              <td>deine</td>
              <td>seine</td>
              <td>ihre</td>
              <td>seine</td>
              <td>unsere</td>
              <td>euere</td>
              <td>Ihre/ihre</td>
            </tr>

            <tr>
              <th rowSpan="4">Accusative</th>
              <th>masculine (+en)</th>
              <td>meinen</td>
              <td>deinen</td>
              <td>seinen</td>
              <td>ihren</td>
              <td>seinen</td>
              <td>unseren</td>
              <td>eueren</td>
              <td>Ihren/ihren</td>
            </tr>
            <tr>
              <th>feminine (+e)</th>
              <td>meine</td>
              <td>deine</td>
              <td>seine</td>
              <td>ihre</td>
              <td>seine</td>
              <td>unsere</td>
              <td>euere</td>
              <td>Ihre/ihre</td>
            </tr>
            <tr>
              <th>neuter (+em)</th>
              <td>meinem</td>
              <td>deinem</td>
              <td>seinem</td>
              <td>ihrem</td>
              <td>seinem</td>
              <td>unserem</td>
              <td>euerem</td>
              <td>Ihrem/ihrem</td>
            </tr>
            <tr>
              <th>plural (+e)</th>
              <td>meine</td>
              <td>deine</td>
              <td>seine</td>
              <td>ihre</td>
              <td>seine</td>
              <td>unsere</td>
              <td>euere</td>
              <td>Ihre/ihre</td>
            </tr>

            <tr>
              <th rowSpan="4">Dative</th>
              <th>masculine (+em)</th>
              <td>meinem</td>
              <td>deinem</td>
              <td>seinem</td>
              <td>ihrem</td>
              <td>seinem</td>
              <td>unserem</td>
              <td>euerem</td>
              <td>Ihrem/ihrem</td>
            </tr>
            <tr>
              <th>feminine (+er)</th>
              <td>meiner</td>
              <td>deiner</td>
              <td>seiner</td>
              <td>ihrer</td>
              <td>seiner</td>
              <td>unserer</td>
              <td>euerer</td>
              <td>Ihrer/ihrer</td>
            </tr>
            <tr>
              <th>neuter</th>
              <td>mein</td>
              <td>dein</td>
              <td>sein</td>
              <td>ihr</td>
              <td>sein</td>
              <td>unser</td>
              <td>euer</td>
              <td>Ihr/ihr</td>
            </tr>
            <tr>
              <th>plural (+en)</th>
              <td>meinen</td>
              <td>deinen</td>
              <td>seinen</td>
              <td>ihren</td>
              <td>seinen</td>
              <td>unseren</td>
              <td>eueren</td>
              <td>Ihren/ihren</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
export default PersonalPronounsPage;