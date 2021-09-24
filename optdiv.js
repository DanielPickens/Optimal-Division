var optimalDivision = function(nums) {
     if (nums.length == 1) return "" + nums[0];
        if (nums.length == 2) return nums[0] + "/" + nums[1];
        let res = nums[0] + "/(";
        for (let i = 1; i < nums.length - 1; i++) res += nums[i] + "/";
        return res + nums[nums.length - 1] + ")";
    }



















/*

Success
Details 
Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Optimal Division.
Memory Usage: 39 MB, less than 50.00% of JavaScript online submissions for Optimal Division.

/*
