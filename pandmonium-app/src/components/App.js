import React, {Component} from 'react';

//Components/ Views
import Hamburgers from '../views/Hamburgers';
import Menu from './generalMenu/generalMenu.jsx'
//import Page404 from './components/Page404'

// Home
import Tables from '../views/selectTable';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Component
class App extends Component {
    render(){
        return(
            <Router basename={window.location.pathname || ''}>
                <Switch>
                    <Route exact path='/' component={Tables} />
                    <Route exact path='/Menu' component={Menu} />
                    <Route exact path='/Hamburgers' component={Hamburgers} />                    
                </Switch>
            </Router>
        )
    };
}

export default App;

