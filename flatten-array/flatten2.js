function flatten2(arr){
    return arr.reduce(function(acc, val){
        return acc.concat(Array.isArray(val) ? flatten2(val) : val);
    },[]);
}
