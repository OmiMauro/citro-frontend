import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './core/Home'
import Signin from './user/Signin'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './admin/dashboard'
import TableInscripciones from './admin/TableInscripciones'
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={Signin} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute path='/admin/inscripciones' exact component={TableInscripciones} />
        {/* <AdminRoute path='/admin/product/update/:productId' exact component={UpdateProduct} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
