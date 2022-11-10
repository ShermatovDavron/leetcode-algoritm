'use strict'
var twoSum = function(nums, target) {
    let numanswer = []
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]==target){
               numanswer.push(i,j) 
            }
        }
    }
    let numsAnswer = []
    numsAnswer.push(numanswer[0],numanswer[1])
    return numsAnswer

};
console.log(twoSum([2,7,11,15],9))