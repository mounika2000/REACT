import React, { Component } from 'react'

export default class CustomerRow extends Component {
     
    render() {
        let {customer} = this.props;
        return (
            <div className="row">
               {customer.firstName} &nbsp; {customer.lastName} &nbsp; 
               <button type="button" onClick={() => this.props.delEvent(customer.id)}>Delete</button>
            </div>
        )
    }
}
