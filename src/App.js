
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/Main';
import Sidebar from './components/sidebar';
import Parking from './components/main/Parking';
import CarList from './components/main/CarList';
import Exempl from './components/main/Exempl';

function App() {

//   const [modal, setModal] = useState(false);

//   const createPost = (newPost) => {
//     setPosts([...posts, newPost])
//     setModal(false)
// }

  return (
    
    <div className="App" >
      <div id='header'>header</div>

      {/* <MyModal visible={modal} setVisible={setModal} >
        <Parking create={createPost}/>
      </MyModal> */}
      {/* <button className='open-btnModal'>Open modal window</button> */}
      <BrowserRouter>
      
        <div id='main-vrapper'>

            <div id='sidebar'> <Sidebar/></div>
            
          <Routes>
          
              <Route path='/' element={<Parking/>} />
              
              <Route path='/all' element={<CarList/>} />
              
              <Route path='/exempl' element={<Exempl/>} />
              
          </Routes>
        </div>
      </BrowserRouter>

      <div id='footer' > project &copy;"blue/wite parking"</div>
    </div>
  );
}

export default App;

