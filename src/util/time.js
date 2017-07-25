/**
 * Transform time into fractions
 * returning object that contains { hour, minute, second }
 *
 * @param   { Number } timeInSecond
 *
 * @returns {{hour: number, minute: number, second: number}}
 */
export function extractTimeFractions(timeInSecond) {
  const time = new Date(null)
  time.setHours(0)
  time.setSeconds(timeInSecond)

  return {
    hour  : time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}