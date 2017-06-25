import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StaticTableBody extends Component {
    render() {
        const self = this;
        const data = this.props.data;

        const rows = data.map(function(item, index) {
            return self.getRow(item, index)
        });

        return <tbody>{rows}</tbody>
    }

    getRow(rowData, key) {
        const cells = [];
        for (var property in rowData) {
            if (rowData.hasOwnProperty(property)) {
                const element = rowData[property]
                cells.push(this.getCell(element, element + key));
            }
        }
        return <tr key={key}>{cells}</tr>;
    }

    getCell(cellData, key) {
        return <td key={key}>{cellData}</td>;
    }

}

StaticTableBody.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        a: PropTypes.string.isRequired,
        b: PropTypes.string.isRequired,
        c: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
    })).isRequired
};

export default StaticTableBody;