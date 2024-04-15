
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login'
import Cart from './screens/Cart';
import MyOrders from './screens/MyOrders.js';
import { CartProvider } from './components/ContextReducer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import SignUp from './screens/SignUp';

function App() {
  return (
     <CartProvider>
      <Router>
     <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/loginuser" element={<Login/>}/>
        <Route exact path="/createuser" element={<SignUp/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/myorders" element={<MyOrders/>}/>
        
      </Routes>
     </div>
     </Router>
     </CartProvider>
  );
}

export default App;
