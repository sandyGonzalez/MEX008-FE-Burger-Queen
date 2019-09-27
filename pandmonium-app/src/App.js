import React, {Component} from 'react';

//Components/ Views
// import HistorialDePago from '../views/HistorialDePago.jsx';
// import Extras from '../views/Extras.jsx';

// //Subroutes
// import MenuComponent from '../views/MenuView';

// //Food
// import Hamburgers from '../views/subviews/Hamburgers';
// import Pizzas from '../views/subviews/Pizzas';
// import Hotdogs from '../views/subviews/Hotdogs';
// import Salads from '../views/subviews/Salads';
// import Drinks from '../views/subviews/Drinks';
// import Desserts from '../views/subviews/Desserts';

//import Page404 from './components/Page404'

// Home
import Tables from './views/MenuView/index';
import Prueba from './views/prueba'
import Prueba2 from './views/prueba2'
import RouteJSON from './components/Menu/icon.json';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Component
class App extends Component {

    state = {
        routes : RouteJSON
    }
    render(){
        return(
            <Router basename={window.location.pathname || ''}>
                <Switch>
                    <Route exact path='/' component={Tables} />
                     <Route exact path={this.state.routes.route} component={Prueba} />
                    {/*<Route exact path={this.state.routes.route} component={Prueba2}/>*/}
                   
                    {/* <Route exact path='/Extras' component={Extras} />
                    <Route exact path='/HistorialDePago' component={HistorialDePago} /> 
                                               
                    
                    
                    <Route exact path='/Menu' component={MenuComponent} />
                    <Route exact path='/Hamburguesas' component={Hamburgers} />
                    <Route exact path='/Pizzas' component={Pizzas} />
                    <Route exact path='/Hotdogs' component={Hotdogs} />
                    <Route exact path='/Ensaladas' component={Salads} />
                    <Route exact path='/Bebidas' component={Drinks} />
                    <Route exact path='/Postres' component={Desserts} />   */}
                </Switch>
            </Router>
        )
    };
}

export default App;

