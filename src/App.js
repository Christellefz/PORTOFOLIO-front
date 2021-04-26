import './App.css'

import { Route, Switch } from 'react-router-dom'

import About from './screen/About.js'
import Home from './screen/Home'
import Navbar from './components/Navbar'

// import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      {location.pathname == '/about' && <Navbar />}

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App
