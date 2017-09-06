/**
 * requestAnimationFrame with FPS throttling
 * AnimationFrame(task, fps [, showFpsElement]);
 *
 * @param {function} task       what to do in requestAnimationFrame loop
 * @param {number} fps          how many time the task will be executed in 1 second
 * @param {Node} showFpsElement element will be inject with FPS count for testing
 */
export class AnimationFrame {
  constructor(task = () => false, targetFps = 60) {
    this.targetFps    = targetFps
    this.fpsInterval  = 1000 / this.targetFps
    this.lastLoopTime = window.performance.now()
    this.task         = task
    this.render()
  }

  render(currentTime) {
    // Request another frame
    this.requestId = requestAnimationFrame(this.render.bind(this))

    // Calculate elapsed time since last loop
    const elapsed = currentTime - this.lastLoopTime

    // if enough time has elapsed, render next frame
    if (elapsed > this.fpsInterval) {
      // Get ready for next frame by setting lastLoopTime = currentTime
      // but also adjust for fpsInterval not being consumed by counting fps itself
      this.lastLoopTime = currentTime - ( elapsed % this.fpsInterval )

      // Do the task
      this.task(this)
    }
  }

  stop() {
    cancelAnimationFrame(this.requestId)
  }
}

/** Core Countdown
 *
 * Countdown(callback, startTime, step, isRepeat, fps)
 * @param {function} callback what to do in after each count
 * @param {number} startTime  start Number that will be counted down
 * @param {number} step       how much you want to count it down in each count
 * @param {number} fps        how many time to count in 1 second
 * @param {boolean} isRepeat  if true, after time = 0, it will start over
 */
export class Countdown {
  constructor(callback = () => false, startTime = 3000, step = 100, targetFps = 60, isRepeat = false) {
    this.startTime   = startTime
    this.currentTime = startTime
    this.step        = step
    this.targetFps   = targetFps
    this.isRepeat    = isRepeat
    this.callback    = callback
  }

  start() {
    // Create new requestAnimationFrame with fps throttling
    if (!this.counter) {
      this.counter = new AnimationFrame(this.count.bind(this), this.targetFps)
    }
    this.count()
  }

  stop() {
    this.counter.stop()
    this.counter = null
  }

  count() {
    // When timer has ended, stop or repeat
    if (this.currentTime <= 0) {
      if (this.isRepeat) {
        this.reset()
      }
      else {
        this.stop()
      }
    }
    else {
      // Counting
      this.currentTime -= this.step
      this.callback(this)
    }
  }

  reset() {
    this.stop()
    this.currentTime = this.startTime
    this.start()
  }
}