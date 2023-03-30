import React, { useContext, useRef } from "react"
import { Link } from "gatsby"
import HeaderImage from "../gifs/glitch.gif"
import SpiralGif from "../gifs/world.gif"
import { VideoContext } from "./VideoProvider"
import anime from "animejs"
import "./header.css"

const Header = () => {
  const { isPlaying, playVideo, pauseVideo } = useContext(VideoContext)
  const playButtonRef = useRef(null)

  const handleButtonHover = () => {
    anime({
      targets: playButtonRef.current,
      scale: 1.2,
      duration: 300,
      easing: "easeInOutQuad",
    })
  }

  const handleButtonLeave = () => {
    anime({
      targets: playButtonRef.current,
      scale: 1,
      duration: 300,
      easing: "easeInOutQuad",
    })
  }

  const handlePlayClick = () => {
    if (!isPlaying) {
      playVideo()
    } else {
      pauseVideo()
    }

    anime({
      targets: playButtonRef.current,
      backgroundColor: [
        { value: "#ff00d08a", duration: 2000 },
        { value: "#00ff008a", duration: 2000 },
        { value: "#ff00ff8a", duration: 2000 },
        { value: "#00ffff8a", duration: 2000 },
        { value: "#ffff008a", duration: 2000 },
        { value: "#ff00008a", duration: 2000 },
        { value: "#00ff008a", duration: 2000 },
      ],
      easing: "easeInOutQuad",
      loop: true,
    })
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
          id="glitch"
          alt="Gatsby logo"
          height={100}
          style={{ margin: 0 }}
          src={HeaderImage}
        />
      </Link>
      <button
        ref={playButtonRef}
        className="play-button"
        onClick={handlePlayClick}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
      >
        Push to Awaken
      </button>
      <Link
        to="https://github.com/NeoLePorte/a-frame_photog"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
      <img
        id="world"
        alt="Gatsby logo"
        height={100}
        style={{ margin: 0 }}
        src={SpiralGif}
      />
      </Link>
    </header>
  )
}

export default Header
