
/**
 * @param {number} duration
 * @return {Promise<void>}
 */
export default async function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}