
function twoSum(arr, n) {
  let s = {};
  for (let i=0; i < arr.length; i++) {
    if (!s[arr[i]]) {
      s[arr[i]] = true;
     }
    if (s[n - arr[i]]) {
      return true;
    }
  }
  return false;
}


const arr = [1,2,3,4,5,6];
console.log(twoSum(arr, 21));
