import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuestBook from './components/CounterContainer';
// import Container from 'reactstrap/lib/Container';
// import Row from 'reactstrap/lib/Row';

// import { Button } from 'reactstrap';
// import Greetings from './components/Greetings';
// import ReactLink from './components/ReactLink';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Spotify.
        </p>

      </header>
      <GuestBook />
    </div>
  );
}
export default App;



// const user = {
  //   name: "Test"
  // }

  // const persons = [
  //   {
  //     id: 1,
  //     name: 'heru'
  //   },
  //   {
  //     id: 2,
  //     name: 'Joko'
  //   },
  //   {
  //     id: 3,
  //     name: 'Doko'
  //   }
  // ]

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Cent data={persons}></Cent>
  //       <ReactLink user={user} massage="string" nilai={5} />
  //     </header>
  //   </div>
  // );

// const user = {
  //   id: 1,
  //   name: "pallaebers",
  //   email: "pallaebers@gmail.com"
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <ReactLink name={user} />
  //       <Greetings name={user} />
  //     </header>
  //   </div>
  // );

// class App extends React.Component{

// }