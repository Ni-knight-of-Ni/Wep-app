//import af login form side
import './App.css';

import LoginForm from './Sites/Components/LoginForm';
//imported sites and compontets
//sites
import Navi from './Sites/Components/Navi'
import Dashboard from './Sites/Dashboard'
import Samtaler from './Sites/Samtaler'
import Filer from './Sites/Filer'
import FLDSkolen from './Sites/FLDSkolen'
import Kalender from './Sites/Kalender'
import Fliler_Bispeparken from './Sites/Fliler_Bispeparken'

//working   <Navi />
//          <Dashboard />


//import of router
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

// Grid layout inport af css og app css
import './Sites/Components/GridLayout.css'
import './App.css';



// det første der bliver kørt på vores side er login siden, som har at hvis du har
//et gemt login vil du gå vidre til siden hvis ikke vil loginform blive vist.

//næste er router opsætning
//vi har nav uden for vores switch og som er fuldt loadet in og ikke i en router
//alle routes er under sider.


function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className='container'>

      <Router className='container'>
        <Navi />
        <Switch>
          <Route path="/Kalender" component={Kalender} />
          <Route path="/FLDSkolen" component={FLDSkolen} />
          <Route path="/Filer" component={Filer} />
          <Route path="/Samtaler" component={Samtaler} />
          <Route path="/Fliler_Bispeparken" exact component={Fliler_Bispeparken} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;


//
