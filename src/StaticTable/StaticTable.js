import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StaticTableHeader from './StaticTableHeader'
import StaticTableBody from './StaticTableBody'

class StaticTable extends Component {

    render() {
        return (
            <table className={this.props.className}>
                <StaticTableHeader colNames={this.getColNames()} />
                <StaticTableBody data={this.getColData()} />
            </table>
        );
    };

    getColNames() {
        return Object.keys(this.props.data[0]); 
    }

    getColData() {
        return this.props.data; 
    }
}

StaticTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string
};

export default StaticTable;