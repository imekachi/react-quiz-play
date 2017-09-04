/**
 * Transform time into fragments
 * returning object that contains { hour, minute, second }
 *
 * @param   {number} timeInSecond
 * @return  {{hour: number, minute: number, second: number}}
 */
export const extractTimeFragments = (timeInSecond) => {
  const time = new Date(null)
  time.setHours(0)
  time.setSeconds(timeInSecond)

  return {
    hour  : time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}