import React, {Component} from 'react';

//Components/ Views
import HistorialDePago from '../views/HistorialDePago.jsx';
import Extras from '../views/Extras.jsx';
import Hamburgers from '../views/Hamburgers.jsx'

//Subroutes
import MenuComponent from './generalMenu/generalMenu.jsx';


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
                    <Route exact path='/Menu' component={MenuComponent} />
                    <Route exact path='/Extras' component={Extras} />
                    <Route exact path='/Hamburguesas' component={Hamburgers} />  
                    <Route exact path='/HistorialDePago' component={HistorialDePago} />                                     
                </Switch>
            </Router>
        )
    };
}

export default App;

