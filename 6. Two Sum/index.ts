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

function twoSum2(nums: number[], target: number): number[] {
    const memory = new Map(); // Here we're going to save the value as a key and the index as a value
    const solution = []
    for (let i: number = 0; i < nums.length; i++) {
        const numToFind = target - nums[i];
        const numExist = memory.get(numToFind);
        console.log(numExist);
        if (numExist === undefined) {
            memory.set(nums[i], i);
            continue;
        };
        solution.push(numExist);
        solution.push(i);
        break
    }

    return solution;
}; 
