import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false
    }
  }

  darkMode(e) {
    e.preventDefault()
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <main className={this.state.darkMode ? 'dark' : 'light'}>
        <article>
          <p>Hey you 👋,</p>
          <p>Bob Wassermann here. I design and develop interfaces
          for digital products, whether that’s a website, app, an installation or anything
          else that requires an interface.</p>
          <p>This website is still being built. Here are some recent projects:</p>
          <ul>
            <li><a href="https://nederlandseofficierenvereniging.nl" target="_blank">Nederlandse Officieren Vereniging (concept, design, front-end, back-end, api)</a></li>
            <li><a href="https://aisler.net/" target="_blank">AISLER (concept, design and front-end of marketing and product pages)</a></li>
            <li><a href="http://cforcharlie.com" target="_blank">C FOR CHARLIE (development)</a></li>
            <li><a href="http://husmannoptiek.nl/" target="_blank">Husmann Optiek (concept, design, development)</a></li>
            <li><a href="http://klukske.nl" target="_blank">’t Klükske (concept, design, development)</a></li>
            <li><a href="http://look2speak.com/" target="_blank">Look2Speak (concept, design, development for app and marketing page)</a></li>
          </ul>
          <p>Want to work together or have a small chat? <a href="&#x6d;&#97;&#x69;&#x6c;&#116;&#111;&#58;&#98;&#x6f;&#98;&#x40;&#x77;&#x61;&#115;&#115;&#101;&#114;&#x6d;&#97;&#110;&#x6e;&#46;&#110;&#108;">Shoot me an e-mail</a>.</p>
        </article>
        <footer>
          <a href="https://dribbble.com/BobWassermann" target="_blank">dribbble</a>
          <a href="https://github.com/BobWassermann" target="_blank">github</a>
          <a href="https://twitter.com/BobWassermann" target="_blank">twitter</a>
          <a href="#" target="_blank" onClick={e => this.darkMode(e)}>turn this site {this.state.darkMode ? 'light' : 'dark'}</a>
        </footer>
      </main>
    );
  }
}

export default App;
