import Home from '../pages/Home'
import Buttons from '../pages/Buttons'
import Input from '../pages/Input'
import Article from '../pages/Article'
import Badge from '../pages/Badge'
const routes = [
  {
    path: '/badge',
    component: Badge
  },
  {
    path: '/article',
    component: Article
  },
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
