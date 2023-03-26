import React, { useContext } from "react"
import { Link } from "gatsby"
import HeaderImage from "../gifs/glitch.gif"
import SpiralGif from "../gifs/world.gif"
import { VideoContext } from "./VideoProvider"




const Header = () => {
  const { isPlaying, playVideo, pauseVideo } = useContext(VideoContext)
  

  const handlePlayClick = () => {
    if (!isPlaying) {
      playVideo()
      console.log('play')
    } else {
    pauseVideo()
    }
    
  }

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <img
          alt="Gatsby logo"
          height={100}
          style={{ margin: 0 }}
          src={HeaderImage}
        />
      </Link>
      <button onClick={handlePlayClick}>Play</button>
      <img
        id="world"
        alt="Gatsby logo"
        height={100}
        style={{ margin: 0 }}
        src={SpiralGif}
      />
    </header>
  )
}

export default Header
