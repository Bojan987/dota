import React from "react";
// import './App.scss';
// import { Navigaiton } from "./components/Navigation";
import { Slider } from "./components/Slider";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Team } from "./components/Team/Team";
import './App.css'
import { ProPlayerStats } from "./components/ProPlayers/ProPlayerStats";





function App() {
 
  return (<>
  <Router>
    <Switch>
      <Route exact path='/'>
        {/* <div className='slideWrap'> */}
        <Slider/>
        {/* </div> */}
      </Route>
      <Route exact path='/team/:team'>
          <Team/>
      </Route>
      <Route exact path='/player/:player'>
          <ProPlayerStats/>
      </Route>

    </Switch>
  
  </Router>
  
</>  
  );
}

export default App;
