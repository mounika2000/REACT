import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test case
test('renders application', () => {
  render(<App />);
  const elem = screen.getByText(/Customer Application/i);
  expect(elem).toBeInTheDocument();
});

it("render customers", () => {
  render(<App />);
  let btns = screen.queryAllByRole("button");
  expect(btns.length).toBe(6);
});

it("delete a customer", () => {
  render(<App />);
  let btns = screen.queryAllByRole("button");
  fireEvent.click(btns[3]);
  btns = screen.queryAllByRole("button");
  expect(btns.length).toBe(5);
});

it("filter customers", () => {
  render(<App />);
  let txtBox = screen.queryByPlaceholderText("search by name");
  fireEvent.change(txtBox, {"target": {"value": "Geller"}});
  screen.debug();
  var btns = screen.queryAllByRole("button");
  expect(btns.length).toBe(2);
});
