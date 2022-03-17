
import './App.css';
import Navbar from './component/Navbar.js';
import Textform from './component/Textform';
import React, {useState} from 'react';
import About from './component/About';
// import {
//   BrowserRouter,
//    Routes,
//   Route
// } from "react-router-dom";


function App() {
    const [mode, setmode] = useState('light'); //check if the dark mode is dark or light
    const [alert, setAlert] = useState(null);

    const showAlert =(message , type)=>{
          setAlert({
            msg: message , 
            type: type
          })
    }

    const toggleMode = ()=>{
        if(mode === 'light'){
          setmode('dark');
          document.body.style.backgroundColor = "#00011e";
          showAlert("Dark mode has been activated", "success");
        }else{
          setmode('light');
          document.body.style.backgroundColor = "white";
          showAlert("Light mode has been activated", "success");
        }
    }
  return (
  <>
  {/* <Navbar title=" hello world"  aboutText = " Me About"/> */}
  <Navbar mode={mode} toggleMode={toggleMode}/>
   <Textform showAlert={showAlert} heading="Enter the Text" mode={mode}/> 

{/* <BrowserRouter>
<Routes>
  <Route path='/textform'  element={<Textform showAlert={showAlert} heading="Enter the Text" mode={mode}/>}/>
 </Routes>
  <Routes>
  <Route path='/about'  element={<About/>}/>
 </Routes>
</BrowserRouter> */}
  </>
  );
}

export default App;
