import './App.css';
import Home from './Home'
import Navbar from './components/Nav'
import About from'./components/About'
import Contact from'./components/Contact'
import Blog from './components/Blog'

import { Routes ,Route, Router } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" exact component={Home}>
            <Home/>
          </Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact} />
          <Route path="/Blog" component={Blog} />
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App;
