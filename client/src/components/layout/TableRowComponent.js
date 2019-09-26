import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class TableRowComponent extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('/api/building/delete/' + this.props.obj._id)
            .then(() => { window.location.href = '/index' })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <TableRow>
                <TableCell>
                    {this.props.obj.name}
                </TableCell>
                <TableCell>
                    {this.props.obj.description}
                </TableCell>
                <TableCell>
                    {this.props.obj.location}
                </TableCell>
                <TableCell>
                    {this.props.obj.type}
                </TableCell>
                <TableCell>
                    {this.props.obj.price}
                </TableCell>
                <TableCell>
                    {this.props.obj.currency}
                </TableCell>
                <TableCell>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </TableCell>
                <TableCell>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </TableCell>
            </TableRow>
        );
    }
}

export default TableRowComponent;