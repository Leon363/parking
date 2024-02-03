
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/Main';
import Sidebar from './components/sidebar';
import Parking from './components/main/Parking';
import CarList from './components/main/CarList';

function App() {
  return (
    
    <div className="App" >
      <div id='header'>header</div>
      <BrowserRouter>
        <div id='main-vrapper'>

            <div id='sidebar'> <Sidebar/></div>
          <Routes>
            
              <Route path='/' element={<Parking/>} />
              <Route path='/all' element={<CarList/>} />
              
          
          </Routes>
        </div>
      </BrowserRouter>

      <div id='footer' > project &copy;"blue/wite parking"</div>
    </div>
  );
}

export default App;


// function App() {
//   return (
//       <div className="App" >
//         <div id='header'>header</div>
//         <BrowserRouter>
//           <Routes >
//             <div id='main-vrapper'>
//               <Route path='Sidebar' element={ <Sidebar/>} />
//               <div id='main'><Parking/></div>
//             </div>
//           </Routes>
//         </BrowserRouter>
//       <div id='footer'>footer</div>
//     </div>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);