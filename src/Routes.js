import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './styles.css'

import Home from './core/Home'

import Signin from './user/Signin'

import AdminRoute from './auth/AdminRoute'

import AdminDashboard from './admin/dashboard'
import TableInscripciones from './admin/TableInscripciones'
import InscriptionsApproved from './admin/InscriptionsApproved'
import InscriptionsRejected from './admin/InscriptionsRejected'
import InscriptionsPending from './admin/InscriptionsPending'

import Success from './components/Success'
import Pending from './components/Pending'
import Rejected from './components/Rejected'
import PageNotFound from './components/PageNotFound'
import FindInscription from './user/FindInscription'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/findinscription' exact component={FindInscription} />
        <Route path='/success' component={Success} />
        <Route path='/pending' component={Pending} />
        <Route path='/rejected' component={Rejected} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute path='/admin/inscripciones' exact component={TableInscripciones} />
        <AdminRoute path='/admin/inscripciones/approved' exact component={InscriptionsApproved} />
        <AdminRoute path='/admin/inscripciones/pending' exact component={InscriptionsPending} />
        <AdminRoute path='/admin/inscripciones/rejected' exact component={InscriptionsRejected} />

        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
