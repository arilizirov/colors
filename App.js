import React, { Component } from 'react';
import { BrowserRouter as Route, Link, BrowserRouter } from 'react-router-dom';
import Green from './green'
import Blue from './blue'
import Red from './red'


class App extends Component{
    render() {
        
        return(
           // <Router>
            <div>
                <h2>Welcome to the Colors App!</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/red'} className="nav-link">Red</Link></li>
                        <li><Link to={'/blue'} className="nav-link">Blue</Link></li>
                        <li><Link to={'/green'} className="nav-link">Green</Link></li>
                    </ul>
                </nav>
                <hr />
                <BrowserRouter>
                    <Route exact path='/red' component={Red} />
                    <Route path='/blue' component={Blue} />
                    <Route path= '/green' component={Green} />
                </BrowserRouter>
            </div>
            //</Router>
        );
    }
}

export default App;