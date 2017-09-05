/**
 * Transform time into fragments
 * returning object that contains { hour, minute, second }
 *
 * @param   {number} millisecond
 * @return  {{hour: number, minute: number, second: number}}
 */
export const extractTimeFragments = (millisecond) => {
  const time = new Date(null)
  time.setHours(0)
  time.setSeconds(millisecond / 1000)

  return {
    hour  : time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}