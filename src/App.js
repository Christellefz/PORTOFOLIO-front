import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Switch>
    <Route
          exact
          path='/'/>
          
    </Switch> 
   
    </div>
  );
}

export default App;
