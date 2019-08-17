import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Page from '../../components/Page'
import WeuiTabbar from '../../components/WeuiTabbar'
import WeuiTabPanel from '../../components/WeuiTabPanel'

import { items } from './config'

const NavbarChildPage = ({ match, setIndex }) => {
  setIndex(parseInt(match.params.id, 10))
  return <WeuiTabPanel>{match.params.id}</WeuiTabPanel>
}

const Tabbar = ({ history }) => {
  const [index, setIndex] = useState(0)
  return (
    <Page bdStyle={{ height: '100%' }}>
      <div className="weui-tab">
        <Switch>
          <Route
            path="/tabbar/:id"
            component={props => (
              <NavbarChildPage {...props} setIndex={setIndex} />
            )}
          />
          <Redirect exact path="/tabbar" to="/tabbar/0" />
        </Switch>
        <div className="weui-tab__panel" />
        <WeuiTabbar
          items={items}
          onclick={index => {
            setIndex(index)
            history.replace(`/tabbar/${index}`)
          }}
          index={index}
        />
      </div>
    </Page>
  )
}
export default Tabbar
