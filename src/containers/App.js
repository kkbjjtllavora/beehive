import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'assets/style.css';
import * as Routes from 'constants/Routes';

// authentication components
import LoginPage from './authentication/LoginPage';
import NewUserPage from './authentication/NewUserPage';
import ProfilePage from './profile/ProfilePage';
import Dashboard from './dashboard/Dashboard';
import InvestmentsPage from './investments/InvestmentsPage';
import CompanyPage from './company/CompanyPage';

const App = ({
  isAuth,
  addUserDone
}) => {
  let routes = (
    <Switch>
      <Route path={Routes.ProfileRoute.path} component={ProfilePage} />
      <Route path={Routes.InvestmentsRoute.path} component={InvestmentsPage} />
      <Route path={Routes.CompanyRoute.path} component={CompanyPage} />
      <Route path={Routes.DashboardRoute.path} component={Dashboard} exact />
      <Redirect to={Routes.DashboardRoute.path} />
    </Switch>
  )

  if(!isAuth) {
    console.log(addUserDone);
    routes = (
      <Switch>
        { 
          addUserDone && (
            <div>
              <Route path={Routes.ProfileRoute.path} component={ProfilePage} /> 
              <Redirect to={Routes.ProfileRoute.path} />
            </div>
          )
        }

        <Route path={Routes.LoginRoute.path} component={LoginPage} />
        <Route path={Routes.NewUserRoute.path} component={NewUserPage} />
        <Redirect to={Routes.LoginRoute.path} />
      </Switch>
    )
  }

  return (
    <BrowserRouter>
      { routes }
    </BrowserRouter>
  )
}

const mapStateToProps = ({ 
  user: {
    idToken,
    addUserDone,
  }
}) => ({
  addUserDone,
  isAuth: idToken !== null
})

export default connect(mapStateToProps)(App);
