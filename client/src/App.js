import './App.css';
import { Route,Routes,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';







function App() {
  const [alert, setAlert] = useState(null); // alert is object has properties msg , type
  const showAlert = (msg, type) => {
    // to modify alert in other components
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <NoteState>    {/*  This is context APi */} 
      <Navbar/>
      <Alert  alert = {alert}/>
      <div className='container'>
      <Routes>
        <Route  path="/" element={ <Home showAlert={showAlert} />} />
        <Route   path="/about" element={ <About />} />
        <Route   path="/login" element={ <Login showAlert={showAlert}  />} />
        <Route   path="/signup" element={ <Signup showAlert={showAlert}  />} />
        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
