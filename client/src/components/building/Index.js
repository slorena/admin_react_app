
import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRowComponent from '../layout/TableRowComponent';
import TableHeadComponent from '../layout/TableHeadComponent';
import { MuiThemeProvider } from 'material-ui';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { building: [] };
    }
    componentDidMount() {
        axios.get('/api/building/index')
            .then(response => {
                this.setState({ buildings: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.buildings.map(function (object, i) {
            return <TableRowComponent obj={object} key={i} />;
        });
    }

    onSort = (sortedBuildings) => {
        this.setState({ building: sortedBuildings });
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.buildings && this.state.buildings.length > 0 ?
                        <div>
                            <h3 className="title">List of buildings</h3>
                            <MuiThemeProvider>
                                <Table className="table table-striped" style={{ marginTop: 20 }}>
                                    <TableHeadComponent obj={this.state.buildings} onSort={this.onSort} />
                                    <TableBody>
                                        {this.tabRow()}
                                    </TableBody>
                                </Table >
                            </MuiThemeProvider>
                        </div>
                        : <h3 className="title">Sorry, we could not find any building. Please register one. </h3>

                }

            </div>
        );
    }
}