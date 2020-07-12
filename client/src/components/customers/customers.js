import React, { Component } from 'react'

export default class customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({ customers },
                () => console.log('customers feteched... ', customers)));
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer =>
                        <li key={customer.id}>{customer.firstName} {customer.lastName}</li>)}
                </ul>
            </div>
        )
    }
}
