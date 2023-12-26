import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import Text from './components/text/Text';

function App() {
   const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
     
        <Text toggle={toggle} displayTxt="GeeksForGeeks" />
        <Button setToggle={setToggle} btnTxt="Toggle Text" />
      </div>
      
  );
}

export default App;
