import React, {Component} from 'react';

// Home
import Tables from './views/TableSelectorView/index';
import Menu from './views/MenuView/index';



import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Component
class App extends Component {
    render(){
        return(
            <Router basename={window.location.pathname || ''}>
                <Switch>
                    <Route exact path='/' component={Tables} />
                    <Route exact path='/menu' component={Menu} />
                </Switch>
            </Router>
        )
    };
}

export default App;

