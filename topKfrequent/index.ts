function topKFrequent(nums: number[], k: number): number[] {
    if (nums.length === 0 || k === 0) return [];
    
    const newHashMap = new Map();
    for (let i: number = 0; i < nums.length; i++) {
        if (newHashMap.has(nums[i])) newHashMap.set(nums[i], newHashMap.get(nums[i]) + 1);
        else newHashMap.set(nums[i], 1);
    }
    const mapOrdered = [...newHashMap].sort((a, b) => b[1] - a[1]);

    const arrayToReturn: Array<number> = [];
    for (let i: number = 0; i < k; i++) arrayToReturn.push(mapOrdered[i][0]);


    return arrayToReturn;
};

const nums = [1, 2];
const k = 2;
