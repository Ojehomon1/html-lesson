import React from 'react';
import './App.css';
import Header from './Components/Header'
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <div className="App">
      <Header />
      <input id="tableSearch" />
      <button>Search</button>
      <table>
        <tbody>
          <SearchResults />
        </tbody>
      </table>
      

    </div>
  );
}

export default App;

