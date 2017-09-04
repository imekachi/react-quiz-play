import React from 'react'

const FBLikeBox = ({ width = 280, height = 155 }) => {
  let src = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdekdquiz%2F&tabs&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=193207127471363`

  const iframeProps = {
    width,
    height,
    src,
    style: { border: 'none', overflow: 'hidden' },
  }

  return (
    <div className="fb-like-box">
      <div className="fb-like-txt _margin-bototm-xs">
        กด <span className="_txt-bold">"Like"</span> เพื่อติดตามควิซเด็ดน่าเล่น
      </div>
      <iframe title="Facebook FanPage LikeBox" {...iframeProps} scrolling="no" frameBorder="0"
              allowTransparency="true"/>
    </div>
  )
}

export default FBLikeBox