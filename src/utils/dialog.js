import React from 'react'
import ReactDOM from 'react-dom'

import WeuiDialog from '../components/WeuiDialog'
import WeuiHalfScreenDialog from '../components/WeuiHalfScreenDialog'
import WeuiTab from '../components/WeuiTab'

const dialogId = 'dialog'
let dialogDom = null

const initDlg = () => {
  dialogDom = document.getElementById(dialogId)
  if (!dialogDom) {
    dialogDom = document.createElement('div')
    dialogDom.id = dialogId
    document.body.appendChild(dialogDom)
  }
}

const hide = () => {
  dialogDom && ReactDOM.unmountComponentAtNode(dialogDom)
}

export const comfirm = ({ title, content, onCancel, onComfirm }) => {
  initDlg()
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
export const alert = ({ content, onComfirm }) => {
  initDlg()
  const comfirm = () => {
    onComfirm && onComfirm()
    hide()
  }
  ReactDOM.render(
    <WeuiDialog content={content} onComfirm={comfirm} />,
    dialogDom
  )
}
export const halfComfirm = ({ title, content, tips, onCancel, onComfirm }) => {
  initDlg()
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
export const navbar = ({ index }) => {
  initDlg()
  ReactDOM.render(<WeuiTab index={index} />, dialogDom)
}
