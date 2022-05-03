import React from 'react';
import './App.css';

import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card
        data="02/08"
        title="Agora é oficial: o Windows 11 está vindo"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
        />

      <Card
        data="02/08"
        title="Tim Berners-Lee vai leiloar código-fonte da web"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        />

      <Card
        data="02/08"
        title="Tem Firefox novo no pedaço e você vai querer migrar"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
        />

      <Card
        data="02/08"
        title="John McAfee, criador do antivírus McAfee, morre"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.."
        />

        <br />
        <br />
        <br />
        <br />

    </div>
  );
}

export default App;
