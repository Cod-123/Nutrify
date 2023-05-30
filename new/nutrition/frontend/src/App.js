// import React from 'react';
// import './App.css';
// import InputForm from './InputForm';
// import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
// import Recipe from './Recipe';



// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <h1 className="App-title">Welcome to My App</h1>
//       </header> */}

//       <header> <h1>Nutrify</h1></header>
//       <h3>Hi,enter you details for the recommendation</h3>
//       <InputForm />

//       <Router>
//         <li>
//           <Link to="/recipe">Recipe</Link>
//         </li>
//         <Routes>
//           <Route path="/recipe" element={<Recipe />} />
//         </Routes>
//       </Router>
//     </div>
//   );


  
// }

// export default App;




import React from 'react';
import './App.css';
import InputForm from './InputForm';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Recipe from './Recipe';

function App() {
  return (
    <div className="App">
      <header className="app-header"> 
      <img src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png" alt="Logo"></img>
      <div>
       <h1>Nutrify</h1>
       <h3>Your Friendly App!</h3>
       </div>

      </header>
      <InputForm />
      <Router>
        <nav>
          <ul>
            
              <div className="recipe-tag">
               <Link to="/recipe">Click here Have a look at our receipe list for your Favourite food Items!</Link>
              </div>
           
          </ul>
        </nav>
        <Routes>
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



