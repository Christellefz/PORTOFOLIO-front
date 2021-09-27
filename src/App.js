import './App.css'

import { Route, Switch, withRouter } from 'react-router-dom'

import About from './screen/About.js'
import Bando from './components/Bando'
import Contact from './screen/Contact.js'
import Home from './screen/Home'
import Navbar from './components/Navbar'
import Parcours from './screen/Parcours.js'
import StripeContainer from './components/StripeContainer'

const App = withRouter(({ location }) => {
  return (
    <div className='App'>
      {location.pathname !== '/' && <Navbar />}
      {location.pathname !== '/' && <Bando />}
      <Switch>
      <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/ProBackground'>
          <Parcours />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Route path='/don'>
          <StripeContainer />
        </Route>
      </Switch>
    </div>
  )
})

export default App
