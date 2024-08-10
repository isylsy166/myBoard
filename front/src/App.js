
import './App.css';
import './css/common.css'
import Main from './component/main/main.js';
import MenuBox from './component/menu/menuBox.js';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <div className='row-space'>     
      <MenuBox/>
      <Main/>
    </div>
  )
}

export default App;
