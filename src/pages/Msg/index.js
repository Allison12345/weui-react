import React from 'react'
import store from '../../store'
import { observer } from 'mobx-react'

import Page from '../../components/Page'
import WeuiBtn from '../../components/WeuiBtn'

//history 通过props接受
const MsgComponent = observer(({ history, store }) => {
  const routerClick = () => {
    history.push('msgpage')
  }
  const onclick1 = () => {
    store.setMsg({
      type: 'success',
      title: '操作成功',
      content:
        '内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现',
      tips: '提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现'
    })
    routerClick()
  }
  const onclick2 = () => {
    store.setMsg({
      type: 'warn',
      title: '操作失败',
      content:
        '内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现',
      tips: '提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现'
    })
    routerClick()
  }
  const onclick3 = () => {
    store.setMsg({
      title: '操作成功',
      content:
        '内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现'
    })
    routerClick()
  }
  const onclick4 = () => {
    store.setMsg({
      content:
        '内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现',
      tips: '提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现'
    })
    routerClick()
  }
  return (
    <Page title="Msg" desc="提示页" spacing>
      <WeuiBtn btnDefault label="成功提示页" onClick={onclick1} />
      <WeuiBtn btnDefault label="失败提示页" onClick={onclick2} />
      <WeuiBtn btnDefault label="无图标提示页" onClick={onclick3} />
      <WeuiBtn btnDefault label="无图标提示页" onClick={onclick4} />
    </Page>
  )
})
const Msg = props => <MsgComponent {...props} store={store} />

export default Msg
