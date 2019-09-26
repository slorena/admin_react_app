import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TableHeadComponent from '../layout/TableHeadComponent';
import TableRowComponent from '../layout/TableRowComponent';

// properties of TableHeader component
let headerProps = {
    enableSelectAll: false,
    displaySelectAll: false,
    adjustForCheckbox: false
};

// our table component that can sort columns
class SortableTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { props, sortBy: 'name' };
    }

    render() {
        return (
            <MuiThemeProvider>
                <Table>
                    <TableHeader {...headerProps}>
                        <TableHeadComponent />
                    </TableHeader>
                    <TableBody>
                        <TableRowComponent />
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
    }
}

export default SortableTable;