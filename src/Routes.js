import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './core/Home'
import Signin from './user/Signin'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './admin/dashboard'
import TableInscripciones from './admin/TableInscripciones'
import Success from './components/Success'
import Pending from './components/Pending'
import Rejected from './components/Rejected'
import PageNotFound from './components/PageNotFound'
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/success' component={Success} />
        <Route path='/pending' component={Pending} />

        <Route path='/rejected' component={Rejected} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute path='/admin/inscripciones' exact component={TableInscripciones} />
        <Route path='*' component={PageNotFound} />

        {/* <AdminRoute path='/admin/product/update/:productId' exact component={UpdateProduct} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
