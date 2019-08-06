import React, { Component } from 'react'

import Page from '../../components/Page'
import Pane from '../../components/Pane'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: -1,
      items: [
        {
          label: '表单',
          icon: 'form',
          items: [
            {
              label: 'Button',
              path: 'buttons'
            },
            {
              label: 'Input',
              path: 'input'
            },
            {
              label: 'List',
              path: 'list'
            },
            {
              label: 'Slider',
              path: 'slider'
            },
            {
              label: 'Uplaoder',
              path: 'uploader'
            }
          ]
        },
        {
          label: '基础组件',
          icon: 'layout',
          items: [
            {
              label: 'Article',
              path: 'article'
            },
            {
              label: 'badge',
              path: 'badge'
            },
            {
              label: 'flex',
              path: 'flex'
            },
            {
              label: 'footer',
              path: 'footer'
            },
            {
              label: 'gallery',
              path: 'gallery'
            },
            {
              label: 'grid',
              path: 'grid'
            },
            {
              label: 'icons',
              path: 'icons'
            },
            {
              label: 'loadMore',
              path: 'loadMore'
            },
            {
              label: 'panel',
              path: 'panel'
            },
            {
              label: 'preview',
              path: 'preview'
            },
            {
              label: 'progress',
              path: 'progress'
            }
          ]
        },
        {
          label: '操作反馈',
          icon: 'feedback',
          items: [
            {
              label: 'Actionsheet',
              path: 'actionsheet'
            },
            {
              label: 'Dialog',
              path: 'dialog'
            },
            {
              label: 'Half-screen Dialog',
              path: 'halfDialog'
            },
            {
              label: 'Msg',
              path: 'msg'
            },
            {
              label: 'Toast',
              path: 'toast'
            },
            {
              label: 'Picker',
              path: 'picker'
            }
          ]
        },
        {
          label: '导航相关',
          icon: 'nav',
          items: [
            {
              label: 'Navbar',
              path: 'navbar'
            },
            {
              label: 'Tabbar',
              path: 'myTabbar'
            }
          ]
        },
        {
          label: '搜索相关',
          icon: 'search',
          items: [
            {
              label: 'SearchBar',
              path: 'searchbar'
            }
          ]
        },
        {
          label: '层级范围',
          icon: 'z-index'
        }
      ]
    }
  }
  render() {
    return (
      <Page
        title={() => (
          <img
            src={require('../../assets/imgs/IMG_5.png')}
            alt="WEUI"
            height="50px"
          />
        )}
        desc="我的weui样式"
        spacing
      >
        <ul>
          {this.state.items.map((item, index) => (
            <Pane {...item} key={index} history={this.props.history} />
          ))}
        </ul>
      </Page>
    )
  }
}
export default Home
