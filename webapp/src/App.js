import './App.css';

//imported sites and compontets
//sites
import Navi from './Sites/Components/Navi'
import Dashboard from './Sites/Dashboard'
import Samtaler from './Sites/Samtaler'
import Filer from './Sites/Filer'
import FLDSkolen from './Sites/FLDSkolen'
import Kalender from './Sites/Kalender'

//working   <Navi />
//          <Dashboard />


//import of router

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './Sites/Components/GridLayout.css'

function App() {
  return (
    <div className='container'>

      <Router className='container'>
        <Navi />



        <Switch>
        <Route path="/Kalender" component={Kalender} />
        <Route path="/FLDSkolen" component={FLDSkolen} />
        <Route path="/Filer" component={Filer} />
        <Route path="/Samtaler" component={Samtaler} />
        <Route path="/" exact component={Dashboard} />

        </Switch>
      </Router>
    </div>

  );
}

export default App;


//<Route path="/" Sites={}>
//<Route path="/" exact Sites={}>


//
//

//////////////////////////////
