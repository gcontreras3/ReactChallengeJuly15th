import './App.css';
import Home from './Home'
import Navbar from './Nav'
import About from'./About'
import Contact from'./Contact'
import Blog from './Blog'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    
    
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Blog" element={<Blog/>} />
        </Routes>
      </div>
    </div>
    
  )
}

export default App;
