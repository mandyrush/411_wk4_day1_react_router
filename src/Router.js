/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import { RouterIcon } from '@material-ui/icons'
import React from 'react'
import { Switch, Route } from 'react-router'

// Write component imports here //
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';

// Start Router function here //
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
        </Switch>
    )
}

export default Router;
