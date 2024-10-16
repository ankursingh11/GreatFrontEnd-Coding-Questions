
// https://www.greatfrontend.com/questions/javascript/binary-search

/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
export default function binarySearch(arr, target) {
  
  let len = arr.length;
  if(len === 0) return -1;

  let start = 0, end = len-1;
  while(start <= end){
    let mid = Math.floor((start+end)/2);

    if(arr[mid] === target) return mid;
    else if(arr[mid] > target) end = mid-1;
    else start = mid+1;
  }

  return -1;
}