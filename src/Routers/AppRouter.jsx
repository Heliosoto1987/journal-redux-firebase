//vendor
import React from 'react'
//Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
//Components
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/auth' component={ AuthRouter } />
                <Route exact patch='/' component={ JournalScreen } />
                <Redirect to='/auth/login'/>
         
            </Switch>
        </Router>
    )
}
