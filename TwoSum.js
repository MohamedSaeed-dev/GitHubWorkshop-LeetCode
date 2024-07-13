function twoSums() {
    let nums = [3, 2, 4];
    let target = 6;
    
    let dic = new Map();

    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if (dic.has(res)) {
            return [dic.get(res), i];
        }

        if (!dic.has(nums[i])) {
            dic.set(nums[i], i);
        }
    }
    throw new Error("No two sum solution");
}