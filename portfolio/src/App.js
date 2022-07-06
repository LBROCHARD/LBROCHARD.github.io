import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import CustomBtn from './Components/CustomBtn'
import Toolbar from './Components/ToolBar'
import Page from './Components/Page'


function App() {
  return (
    <>
      <Router>
        <Toolbar/>
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
    </>
  );
}


export default App;
