import React from 'react'
import ReactDOM from 'react-dom'

import WeuiDialog from '../components/WeuiDialog'
import WeuiHalfScreenDialog from '../components/WeuiHalfScreenDialog'

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
export const halfComfirm = ({ title, content, tips, onCancel, onComfirm }) => {
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
    <WeuiHalfScreenDialog
      title={title}
      content={content}
      tips={tips}
      onCancel={cancel}
      onComfirm={confirm}
    />,
    dialogDom
  )
}
