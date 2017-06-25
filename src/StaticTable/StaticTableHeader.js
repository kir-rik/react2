import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StaticTableHeader extends Component {
    render(){
        const ths = this.props.colNames.map(function(col) {
            return <th key={col}>{col}</th>;
        });
        return <thead>
                    <tr key={0}>{ths}</tr>
               </thead>;
        
    }
}

StaticTableHeader.propTypes = {
    colNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default StaticTableHeader;