import React, {Component} from 'react';

//Components/ Views
import HistorialDePago from '../views/HistorialDePago.jsx';
import Extras from '../views/Extras.jsx';
<<<<<<< HEAD
import Hamburgers from '../views/Hamburgers.jsx'
=======
>>>>>>> b7e9dff84c50458dd3c739491c9a5a67336df2f4

//Subroutes
import MenuComponent from '../views/MenuView';

//Food
import Hamburgers from '../views/subviews/Hamburgers';
import Pizzas from '../views/subviews/Pizzas';
import Hotdogs from '../views/subviews/Hotdogs';
import Salads from '../views/subviews/Salads';
import Drinks from '../views/subviews/Drinks';
import Desserts from '../views/subviews/Desserts';

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
                    <Route exact path='/Extras' component={Extras} />
<<<<<<< HEAD
                    <Route exact path='/Hamburguesas' component={Hamburgers} />  
                    <Route exact path='/HistorialDePago' component={HistorialDePago} />  
                                     
=======
                    <Route exact path='/HistorialDePago' component={HistorialDePago} />                                     
                    
                    
                    <Route exact path='/Menu' component={MenuComponent} />
                    <Route exact path='/Hamburguesas' component={Hamburgers} />
                    <Route exact path='/Pizzas' component={Pizzas} />
                    <Route exact path='/Hotdogs' component={Hotdogs} />
                    <Route exact path='/Ensaladas' component={Salads} />
                    <Route exact path='/Bebidas' component={Drinks} />
                    <Route exact path='/Postres' component={Desserts} />  
>>>>>>> b7e9dff84c50458dd3c739491c9a5a67336df2f4
                </Switch>
            </Router>
        )
    };
}

export default App;

