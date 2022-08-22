import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; 

import Mybook from './courselistscreen.js';
import Myproduct from './coursedetailscreen';






function App() {
  return (
     <HashRouter>
            <ul className="mynav">
                
                <li> <Link to="/booklist" className="mylink"> course List Screen</Link></li>
                <li> <Link to="/productlist" className="mylink"> course Detail Screen</Link></li>
            
            </ul>
            <Routes>
                          <Route exact path ="/booklist" element ={ <Mybook /> } />
                          <Route exact path ="/productlist" element ={ <Myproduct /> } />

                  </Routes>
     </HashRouter>
  );
}

export default App;
 