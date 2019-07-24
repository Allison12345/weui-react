import Home from '../pages/Home'
import Buttons from '../pages/Buttons'
import Input from '../pages/Input'
const routes = [
  {
    path: '/input',
    component: Input
  },
  {
    path: '/buttons',
    component: Buttons
  },
  {
    path: '/',
    component: Home
  }
]
export default routes
