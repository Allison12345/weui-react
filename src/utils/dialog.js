import React from 'react'
import ReactDOM from 'react-dom'

import WeuiDialog from '../components/WeuiDialog'

const dialogId = 'dialog'

export const comfirm = ({ title, content, onCancel, onComfirm }) => {
  let dialogDom = document.getElementById(dialogId)
  if (!dialogDom) {
    dialogDom = document.createElement('div')
    dialogDom.id = dialogId
    document.body.appendChild(dialogDom)
  }
  const hide = () => {
    ReactDOM.unmountComponentAtNode(dialogDom)
  }
  const confirm = () => {
    onComfirm && onComfirm()
    hide()
  }
  const cancel = () => {
    onCancel && onCancel()
    hide()
  }
  ReactDOM.render(
    <WeuiDialog
      title={title}
      content={content}
      onCancel={cancel}
      onComfirm={confirm}
    />,
    dialogDom
  )
}
