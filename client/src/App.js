import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/NavComponents/About';
import Navbar from './Pages/NavComponents/Navbar';
import Add from './Pages/NavComponents/Add';
import Home from './Pages/NavComponents/Home';
import Update from './Pages/NavComponents/Update';
// import About from './Components/About';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Data from './User/data';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
        <>
        <Router>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/> 
              <Route exact path="/Add" element={<Add/>}/>
              <Route exact path="/about" element={<About/>}/> 
              <Route exact path="/Update" element={<Update/>}/>
            </Routes>
        </Router>
        {/* <Data/> */}
       </>  
  );  
}

export default App;
