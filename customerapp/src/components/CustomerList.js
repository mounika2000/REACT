import React, { Component } from 'react'
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    
  state = {
    "customers" :[{
        "id": 1,
        "firstName": "Rachel",
        "lastName": "Green ",
        "gender": "female",
        "address": "Blore"
    },
    {
        "id": 2,
        "firstName": "Chandler",
        "lastName": "Bing",
        "gender": "male",
        "address": "West Street"
    },
    {
        "id": 3,
        "firstName": "Joey",
        "lastName": "Tribbiani",
        "gender": "male",
        "address": "Kattegat"
    },
    {
        "id": 4,
        "firstName": "Monica",
        "lastName": "Geller",
        "gender": "female",
        "address": "some address"
    },
    {
        "id": 5,
        "firstName": "Ross",
        "lastName": "Geller",
        "gender": "male",
        "address": "some address "
    },
    {
        "id": 6,
        "firstName": "Phoebe",
        "lastName": "Buffay",
        "gender": "female",
        "address": "some address"
    }
]
};
    render() {
        return (
            <div>
                {
                    this.state.customers.map(c => <CustomerRow key={c.id} customer={c}/>)
                }
            </div>
        )
    }
}
