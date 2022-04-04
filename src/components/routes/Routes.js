import React from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import '../assets/css/styles.css'
import '../assets/css/index.css'

import 'react-image-lightbox/style.css'

import Home from '../components/core/Index'

/*import Signin from '../components/user/Signin'
 mport AdminRoute from '../auth/AdminRoute'

import AdminDashboard from '../components/admin/dashboard'
import TableInscripciones from '../components/admin/TableInscripciones'
import InscriptionsApproved from '../components/admin/InscriptionsApproved'
import InscriptionsRejected from '../components/admin/InscriptionsRejected'
import InscriptionsPending from '../components/admin/InscriptionsPending'
import AddImage from '../admin/AddImage'

 */

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
      {/*   <Route path='/signin' exact component={Signin} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute
          path='/admin/inscripciones'
          exact
          component={TableInscripciones}
        />
        <AdminRoute
          path='/admin/inscripciones/approved'
          exact
          component={InscriptionsApproved}
        />
        <AdminRoute
          path='/admin/inscripciones/pending'
          exact
          component={InscriptionsPending}
        />
        <AdminRoute
          path='/admin/inscripciones/rejected'
          exact
          component={InscriptionsRejected}
        />
        <AdminRoute path='/admin/images/agregar' exact component={AddImage} />
 */}
        {/* <Route path='*' component={PageNotFound} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routess
