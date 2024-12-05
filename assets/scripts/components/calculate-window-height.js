window.addEventListener('resize', calculateWindowHeight)

calculateWindowHeight()

function calculateWindowHeight () {
  if (window.innerWidth < 768) {
    document.documentElement.style.setProperty("--100vh", `${window.innerHeight}px`)
  }
}
