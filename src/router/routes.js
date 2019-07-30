import Home from '../pages/Home'
import Buttons from '../pages/Buttons'
import Input from '../pages/Input'
import Article from '../pages/Article'
import Badge from '../pages/Badge'
import Flex from '../pages/Flex'
import Footer from '../pages/Footer'
const routes = [
  {
    path: '/footer',
    component: Footer
  },
  {
    path: '/flex',
    component: Flex
  },
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
