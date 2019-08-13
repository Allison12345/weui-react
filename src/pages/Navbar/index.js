import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Page from '../../components/Page'

import WeuiNavbar from '../../components/WeuiNavbar'
import WeuiTabPanel from '../../components/WeuiTabPanel'

const items = ['选项一', '选项二', '选项三']

const NavbarChildPage = ({ match, setIndex }) => {
  setIndex(parseInt(match.params.id, 10))
  return <WeuiTabPanel>{match.params.id}</WeuiTabPanel>
}

const Navbar = ({ history }) => {
  const [index, setIndex] = useState(0)
  return (
    <Page>
      <div className="weui-tab">
        <WeuiNavbar
          items={items}
          onClick={index => {
            setIndex(index)
            history.replace(`/navbar/${index}`)
          }}
          index={index}
        />
        <Switch>
          <Route
            path="/navbar/:id"
            component={props => (
              <NavbarChildPage {...props} setIndex={setIndex} />
            )}
          />
          <Redirect exact path="/navbar" to="/navbar/0" />
        </Switch>
      </div>
    </Page>
  )
}
export default Navbar
