import React from 'react'
import { observer } from 'mobx-react'

import store from '../../store'

import Page from '../../components/Page'
import Pane from '../../components/Pane'

import { items } from './config'

const HomeComponent = observer(({ shop, history }) => {
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
        {items.map((item, index) => (
          <Pane
            {...item}
            key={index}
            isShow={index === shop.activeIndex}
            history={history}
            onClick={() => {
              if (index === shop.activeIndex) {
                shop.setActiveIndex(-1)
              } else {
                shop.setActiveIndex(index)
              }
            }}
          />
        ))}
      </ul>
    </Page>
  )
})

const Home = props => <HomeComponent {...props} shop={store} />

export default Home
