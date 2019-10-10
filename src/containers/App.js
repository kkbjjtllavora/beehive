import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'assets/stylesheets/style.css';
import * as Routes from 'constants/Routes';

// authentication components
import LoginPage from 'containers/authentication/LoginPage';
import NewUserPage from 'containers/authentication/NewUserPage';
import ProfilePage from 'containers/profile/ProfilePage';
import Dashboard from 'containers/dashboard/Dashboard';
import InvestmentsPage from 'containers/investments/InvestmentsPage';
import CompanyPage from 'containers/company/CompanyPage';

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
