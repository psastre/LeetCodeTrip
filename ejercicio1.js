var containsDuplicate = function(nums) {
    for(let i = 0; i<nums.length; i++){
        for(let k = 0; k<nums.length; k++){
            if (!i==k){
                if(nums[i]===nums[k]){
                    console.log('true')
                    return true
                    
                
                }
            }
        }
    }
return false
};

var containsDuplicate = function(nums) {
    for(let i = 0; i<nums.length - 1; i++){
        for(let k = i+1; k<nums.length; k++){
            
            if(nums[i]==nums[k]) return true
                    
                 
        }
    }
    return false
};

var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};



nums = [1,2,3,1]
containsDuplicate(nums)