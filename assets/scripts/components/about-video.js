const aboutVideoTag = document.querySelector('[data-element="about-video-tag"]')
const aboutVideoPlay = document.querySelector('[data-element="about-video-play"]')

if (aboutVideoTag && aboutVideoPlay) aboutVideoInit()

function aboutVideoInit () {
  aboutVideoPlay.addEventListener('click', openVideo)

  aboutVideoTag.addEventListener("fullscreenchange", fullscreenchangeHandler);

  function fullscreenchangeHandler () {
    if (document.fullscreenElement) {
      aboutVideoTag.style.display = 'block'
      aboutVideoTag.play()
    } else {
      aboutVideoTag.style.display = 'none'
      aboutVideoTag.pause()
      aboutVideoTag.currentTime = 0
    }
  }

  function openVideo () {
    if (aboutVideoTag.requestFullscreen) {
      aboutVideoTag.requestFullscreen()
    } else if (aboutVideoTag.webkitRequestFullscreen) {
      aboutVideoTag.webkitRequestFullscreen()
    } else if (aboutVideoTag.msRequestFullScreen) {
      daboutVideoTagiv.msRequestFullScreen()
    }
  }
}
