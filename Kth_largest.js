/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function sortNumber(a,b){
    return a-b;
}

var findKthLargest = function(nums, k) {
    var l = nums.length;
        nums.sort(sortNumber);
        return nums[l-k];
};