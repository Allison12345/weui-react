import React from 'react'

const WeuiArticle = () => {
  return (
    <article className="weui-article">
      <h1>大标题</h1>
      <section>
        <h2>章标题</h2>
        <section>
          <h3>1,1节标题</h3>
          <p>content</p>
          <p>
            <img src={require('../../assets/imgs/IMG_1.png')} alt="1" />
            <img src={require('../../assets/imgs/IMG_2.png')} alt="2" />
          </p>
        </section>
      </section>
    </article>
  )
}
export default WeuiArticle
