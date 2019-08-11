import React from 'react'
import store from '../../store'

import WeuiMsg from '../../components/WeuiMsg'

const MsgPage = ({ history }) => {
  return <WeuiMsg {...store.msg} history={history} />
}
export default MsgPage
