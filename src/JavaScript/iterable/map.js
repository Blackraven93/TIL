// O(n) - One-pass Hash Table
const twoSum = (nums, target) => {
  let map = new Map;
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i]
      }
      map.set(nums[i], i);
  }
}

// Hash table
// 키 값을 매핑할 때
// 장점?? 매우매우 빠르다.
// ex
const nums = [1,2,3,4,4,5,11,15]
const target = 9
console.log(twoSum(nums, target))