/**
 * wait for a certain time and return as a Promise
 *
 * @param   {number} timeToWait
 * @return  {promise}
 */
export const wait = timeToWait => new Promise(resolve => setTimeout(resolve, timeToWait))