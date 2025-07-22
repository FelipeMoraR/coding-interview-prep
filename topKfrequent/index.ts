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

// Other way to doit with O(n)
function topKFrequent2(nums: number[], k: number): number[] {
    const memo = new Map();
    const numsOrdered = new Array(nums.length + 1).fill([]); // All position share the same pointer of an array
    const numsToReturn: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        if (memo.has(nums[i])) memo.set(nums[i], 1 + memo.get(nums[i]));
        else memo.set(nums[i], 1);
    }

    for (let [k, v] of memo) {
        const targetArray = [...numsOrdered[v]]; 
        targetArray.push(k);
        numsOrdered[v] = targetArray;
    }

    for (let j: number = numsOrdered.length - 1; j > 0; j--) {
        if (numsOrdered[j].length === 0) continue;
        
        for (let i of numsOrdered[j]) {
            if (numsToReturn.length === k) return numsToReturn
            numsToReturn.push(i);
        }
    }

    return numsToReturn
};
