import React, { Fragment } from 'react'

const WeuiFooter = ({ link, two, text }) => {
  return (
    <Fragment>
      <div className="weui-footer">
        {link && (
          <p className="weui-footer__links">
            <a
              className="weui-footer__link"
              href="https://www.baidu.com/s?ie=UTF-8&wd=%E7%99%BE%E5%BA%A6"
            >
              {link}
            </a>
            {two && (
              <a
                className="weui-footer__link"
                href="https://www.baidu.com/s?ie=UTF-8&wd=%E7%99%BE%E5%BA%A6"
              >
                {link}
              </a>
            )}
          </p>
        )}
        <p className="weui-footer__text">{text}</p>
      </div>
      <br />
      <br />
    </Fragment>
  )
}
export default WeuiFooter
