
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null)

 const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });

  setTimeout  (() =>{
    setAlert(null)
  },500);
}
  
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode("dark")
    document.body.style.backgroundColor = 'hsl(248, 53%, 58%)'
    showAlert(" Dark mode has been enabled !", "success")
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert(" Light mode has been enabled !", "success")
  }
}
  return ( 
  <>
 <Navbar title="Textutils" aboutText="About Us"  mode={mode} toggleMode={toggleMode} />
<Alert  alert={alert}/>
 <div className="container my-3">
 <TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
 </div>
 
  </>
  );

}

export default App;
