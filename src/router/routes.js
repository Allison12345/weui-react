import Home from '../pages/Home'
import Buttons from '../pages/Buttons'
import Input from '../pages/Input'
import Article from '../pages/Article'
import Badge from '../pages/Badge'
import Flex from '../pages/Flex'
import Footer from '../pages/Footer'
import List from '../pages/list'
import Grid from '../pages/Grid'
import Slider from '../pages/Slider'
import ActionSheet from '../pages/ActionSheet'
import Dialog from '../pages/Dialog'
import HalfDialog from '../pages/HalfDialog'
import Msg from '../pages/Msg'
import Icons from '../pages/Icons'
import Loadmore from '../pages/Loadmore'
import Panel from '../pages/Panel'
import Preview from '../pages/Preview'
import Progress from '../pages/Progress'
import MsgPage from '../pages/MsgPage'
import UpLoader from '../pages/upLoader'
import Toast from '../pages/Toast'
import Navbar from '../pages/Navbar'
import Tabbar from '../pages/Tabbar'
import Gallery from '../pages/Gallery'
const routes = [
  {
    path: '/gallery',
    component: Gallery
  },
  {
    path: '/tabbar',
    component: Tabbar,
    exact: false
  },
  {
    path: '/navbar',
    component: Navbar,
    exact: false
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/uploader',
    component: UpLoader
  },
  {
    path: '/msgpage',
    component: MsgPage
  },
  {
    path: '/progress',
    component: Progress
  },
  {
    path: '/preview',
    component: Preview
  },
  {
    path: '/panel',
    component: Panel
  },
  {
    path: '/loadmore',
    component: Loadmore
  },
  {
    path: '/icons',
    component: Icons
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/halfDialog',
    component: HalfDialog
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/actionsheet',
    component: ActionSheet
  },
  {
    path: '/slider',
    component: Slider
  },
  {
    path: '/grid',
    component: Grid
  },
  {
    path: '/list',
    component: List
  },
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
