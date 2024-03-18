
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'






import './App.css';
import Home from './screens/Home';
import Login from './screens/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import SignUp from './screens/SignUp';

function App() {
  return (
     <Router>
     <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/loginuser" element={<Login/>}/>
        <Route exact path="/createuser" element={<SignUp/>}/>
        
      </Routes>
     </div>
     </Router>
  );
}

export default App;
