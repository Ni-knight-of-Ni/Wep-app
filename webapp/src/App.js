import './App.css';

//imported sites and compontets
//sites
import Navi from './Sites/Components/Navi'
import Dashboard from './Sites/Dashboard'
import Samtaler from './Sites/Samtaler'

//working   <Navi />
//          <Dashboard />


//import of router

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <>

      <Router>
        <Navi />

        <Dashboard />
        <Samtaler />

        <Switch>

        </Switch>
      </Router>
    </>

  );
}

export default App;


//<Route path="/" Sites={}>
//<Route path="/" exact Sites={}>


//
//

//////////////////////////////
