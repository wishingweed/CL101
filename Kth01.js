/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
	var low = 0;
	var high = nums.length -1;
	var tar = nums.length -k;
	while(low <= high){

		var temp = partion(low,high,nums);

		if(temp + 1 < tar){
			low = temp + 1;
			continue;
		}
		if(temp + 1 > tar){
			high = temp;
			continue;
		}
		// console.log(nums[0],nums[1],nums[2]);
		if( temp + 1 == tar)
		{
			break;
		}
	}
	return nums[nums.lengh - 1];
};

function partion(low,high,nums){
	var key = nums[high];
	var i = low;
	var j = high;
	// console.log('i,j',i,j,nums);
	while(i<j){
		if(nums[i] > key && nums[j] < key){
	      var temp = nums[i];
		  nums[i] = nums[j];
		  nums[j] = temp;	
		}
		while(nums[i] <= key && i<high) i++;
		while(nums[j] >= key && j>low) j--;
	}
	if(key <= nums[j]){
	  nums[high] = nums[j];
	  nums[j] = key;	
	}
	console.log(nums,j);
	return j;
}