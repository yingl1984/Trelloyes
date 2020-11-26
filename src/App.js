import './App.css';
import List from './List';
import React from 'react';
// import ReactDOM from 'react-dom';

function App(props) {
  // props:STORE
 console.log(props.store.lists);

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {props.store.lists.map(list => (
          <List 
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => props.store.allCards[id])}
          />))
        }
      </div>
    </main>
  );
}

export default App;
