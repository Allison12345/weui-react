import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import routes from './routes'

const Router = () => (
  <BrowserRouter>
    {routes.map(route => (
      <Route key={route.path} exact {...route} />
    ))}
  </BrowserRouter>
)

export default Router
