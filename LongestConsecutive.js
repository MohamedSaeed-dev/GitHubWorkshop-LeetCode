function longestConsecutive(nums) {
    let hash = new Set(nums);
    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!hash.has(nums[i] - 1)) {
            let length = 1;
            while (hash.has(nums[i] + length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
}