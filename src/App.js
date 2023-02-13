import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import LoginForm from './mainfile/js files/login';
import Signup from './mainfile/js files/SignUP';
import {Provider} from "react-redux"
import store from './mainfile/redux/store';
import NavScrollExample from './mainfile/js files/nav bar/nav';
import Carts from './mainfile/js files/cart/cart';
import Home from './mainfile/js files/home';
import Item from './mainfile/js files/item/item';
import SingleItem from './mainfile/js files/singleproduct.=/single';
import Footer from './mainfile/js files/footer/footer';

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
    
      <Switch>
        <Route exact path='/'>
          <LoginForm/>
        </Route>
          <Route exact path='/carts'>
            <Carts/>
          </Route>
          <Route exact path='/signin'>
            <Signup/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/items'>
    <Item/>
          </Route>
          <Route exact path='/singleItem'>
            <SingleItem/>
          </Route>
      </Switch>
      
   </Router>
   
   </Provider>
    </>
 
  );
}

export default App;
