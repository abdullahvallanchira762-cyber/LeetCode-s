/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let groupedItems={}

let arr=this;

for(let i=0; i<arr.length;i++){

    if(groupedItems[fn(arr[i])]){

        groupedItems[fn(arr[i])].push(arr[i])
    }else{
        groupedItems[fn(arr[i])]=[]
        groupedItems[fn(arr[i])].push(arr[i])
    }
}

return groupedItems
  
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */