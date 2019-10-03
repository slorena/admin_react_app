
import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRowComponent from '../layout/TableRowComponent';
import TableHeadComponent from '../layout/TableHeadComponent';
import { MuiThemeProvider } from 'material-ui';
import ErrorComponent from '../handlingMessages/ErrorComponent';
import LoadingComponent from '../loading/LoadingComponent';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { buildings: [], loading: true, error: '' };

    }
    componentDidMount() {
        // put  component in loading state and clear error, if exists
        this.setState({ loading: true, error: "" })

        axios.get('/api/building/index')
            .then(response => {
                this.setState({ buildings: response.data, loading: false, error: '' });
            })
            .catch(function (error) {
                this.setState({ buildings: [], loading: false, error: error })
            })
    }

    tabRow() {
        return this.state.buildings.map(function (object, i) {
            return <TableRowComponent obj={object} key={i} />;
        });
    }

    onSort = (sortedBuildings) => {
        this.setState({ buildings: sortedBuildings });
    }

    render() {
        const { loading, error } = this.state;

        if (loading) {
            return (
                <LoadingComponent />
            )
        }

        if (error) {
            return (
                <ErrorComponent error={this.state.error} />
            )
        }
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