import React, { Component } from 'react';
import { TableRow } from 'material-ui';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

class TableHeadComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { sortBy: 'name' };
    }

    headers = [
        { name: "Name", key: "name" },
        { name: "Description", key: "description" },
        { name: "Location", key: "location" },
        { name: "Type", key: "type" },
        { name: "Price", key: "price" },
        { name: "Currency", key: "currency" }
    ];

    updateSortBy(sortBy) {
        // multiple clicks on the same column reverse the sort order
        if (sortBy == this.state.sortBy) {
            this.props.onSort && this.props.onSort([...this.props.obj.reverse()]);
            return;
        }

        let rows = [...this.props.obj];
        rows.sort((a, b) => {
            if (a[sortBy] < b[sortBy])
                return -1;
            if (a[sortBy] > b[sortBy])
                return 1;
            return 0;
        });

        this.setState({ rows, sortBy });

        this.props.onSort && this.props.onSort(rows);
    }

    renderHeaders() {
        let header = this.headers.map((h) => {

            return <SortableHeader
                key={h.key}
                name={h.name}
                onClicked={() => this.updateSortBy(h.key)}
                isSortColumn={this.state.sortBy == h.key} />
        });
        return <TableRow>{header}</TableRow>;
    }

    render() {
        return (
            <TableHead>
                {this.renderHeaders()}
            </TableHead>
        )

    }
}

function SortableHeader(props) {
    let style = {}

    if (props.isSortColumn) {
        style.fontWeight = "bold";
        style.color = "black";
    }

    return (
        <TableCell>
            <div className="tableHeader" style={style} onClick={() => props.onClicked()}>{props.name}</div>
        </TableCell>
    );
}

export default TableHeadComponent;
