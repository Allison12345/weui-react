import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import routes from './routes'

const Router = () => (
  <BrowserRouter>
    {routes.map(route => (
      <Route {...route} key={route.path} exact />
    ))}
  </BrowserRouter>
)

export default Router
