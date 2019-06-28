const windowWidth = window.innerWidth,
      windowHeight = window.innerHeight

export const ApiService = {
  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getWindowWidth() {
    return windowWidth
  },
  getWindowHeight() {
    return windowHeight
  },
  randomTopPosition() {
    return this.getRandomNumber(0, this.getWindowHeight() - 150)
  },
  randomLeftPosition() {
    return this.getWindowWidth() - this.getRandomNumber(200, 500)
  },
  ramdomConfig() {
    let config = {
      top: this.randomTopPosition(),
      left: this.randomLeftPosition(),
      width: `${this.getRandomNumber(150, 250)}px`,
      height: `${this.getRandomNumber(100, 200)}px`,
      timeScale: 6000,
      timeSlide: 40000,
      textIndent: `${this.getRandomNumber(-50, 50)}px`,
    }
    return config
  }
}

export default ApiService
