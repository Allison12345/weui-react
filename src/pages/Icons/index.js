import React from 'react'

import Page from '../../components/Page'
import WeuiIcon from '../../components/WeuiIcon'
import WeuiIconSp from '../../components/WeuiIconSp'

const items = [
  { icon: 'success', title: '成功', desc: '用于表示操作顺利达成' },
  {
    icon: 'info',
    title: '提示',
    desc: '用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息'
  },
  {
    icon: 'warn',
    title: '普通警告',
    desc: '用于表示操作后将引起一定后果的情况',
    primary: 'primary'
  },
  {
    icon: 'warn',
    title: '强烈警告',
    desc: '用于表示操作后将引起严重的不可挽回的后果的情况'
  },
  { icon: 'waiting', title: '等待', desc: '用于表示等待' }
]

const spItems = [
  'success',
  'success-no-circle',
  'circle',
  'warn',
  'download',
  'info-circle',
  'cancel',
  'search'
]

const Icons = () => {
  return (
    <Page title="Icons" desc="图标" spacing>
      {items.map((item, index) => (
        <WeuiIcon key={index} {...item} />
      ))}
      <div className="icon_sp_area">
        {spItems.map((item, index) => (
          <WeuiIconSp icon={item} key={index} />
        ))}
      </div>
    </Page>
  )
}
export default Icons
