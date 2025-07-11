function twoSum(nums: number[], target: number): number[] {
    const solution = [];
    for (let i: number = 0; i < nums.length; i++) {
        const numberToFind = target - nums[i];
        const indexOfOurNumber = nums.findIndex((el, index) => el === numberToFind  && index !== i);
        if (indexOfOurNumber < 0) continue; 
        solution.push(i);
        solution.push(indexOfOurNumber);
        break;
    } 
    
    return solution;
};
