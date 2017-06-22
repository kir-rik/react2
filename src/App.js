import React, { Component } from 'react';
import StaticTable from './StaticTable.js';
import DataProvider from './DataProvider.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="content">
          <StaticTable data={DataProvider.getStaticTableData()} className='table-1'/>
        </div>
      </div>
    );
  }
}

export default App;
