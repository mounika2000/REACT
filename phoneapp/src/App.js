import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
   <>
  <Router>
    <Navbar />
    <Switch>
      <Route path="/products" component={ProductList} />
      <Route path="/cart" component={Cart} />
      <Route path="/details/:id" component={Details} />
      <Route exact path="/" component={ProductList} />
      <Route default component={Default} />
    </Switch>
  </Router>
   </>
  );
}

export default App;
