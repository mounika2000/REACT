import { render, screen, fireEvent } from '@testing-library/react';
// component to test
import CustomerRow from './CustomerRow';

describe("testing <CustomerRow /> compoment", () => {
    let c = {
        "id": 12,
        "firstName" : "Harry",
        "lastName" : "Potter"
    }; // mock customer

    // mock this.deleteCustomer(id) of CustomerList
    let callback = jest.fn(); // mock function

    it("test render", () => {
        // <CustomerRow 
        //                         key={c.id} 
        //                         customer={c} 
        //                         delEvent={(id) => this.deleteCustomer(id)} />

        render(<CustomerRow customer={c} delEvent={(id) => callback(id)} />);
        let elem = screen.getByText(/Harry/i);
        expect(elem).toBeInTheDocument();
        screen.debug();
    });

    it("delete should work", () => {
        render(<CustomerRow customer={c} delEvent={(id) => callback(id)} />);
       let btn = screen.getByRole("button");
       fireEvent.click(btn);
       expect(callback).toBeCalledTimes(1);
       expect(callback).toBeCalledWith(12);
        screen.debug();
    });

})