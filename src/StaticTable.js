import React, { Component } from 'react';

class StaticTable extends Component {

  render() {
    const headerComponents = this.generateHeaders();
    const rowComponents = this.generateRows();
    return (
      <table className={this.props.className}>
        <thead>{headerComponents}</thead>
        <tbody>{rowComponents}</tbody>
      </table>
    );
  };

  generateHeaders() {
    const cols = Object.keys(this.props.data[0]);
    const ths = cols.map(function(col) {
      return <th key={col}>{col}</th>;
    });
    return <tr key={0}>{ths}</tr>;
  }

  
  generateRows() {
    const cols = Object.keys(this.props.data[0]);
    const data = this.props.data;

    return data.map(function(item, index) {
      const cells = cols.map(function(col) {
        return <td key={col+index}>{item[col]}</td>;
      });
        return <tr key={index}>{cells}</tr>;
    });
  }

}

export default StaticTable;