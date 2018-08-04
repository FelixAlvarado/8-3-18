function getMinimumUniqueSum(arr) {
    let check = {};
    let extras = [];
    for (let i = 0; i < arr.length; i++){
        if (check[arr[i]]){
            let below = checkBelow(arr[i], arr);
            if (below){
                arr[i] = below;
            } else {
            arr[i] += check[arr[i]];
            extras.push(arr[i]);
            check[arr[i]] += 1;
            }
        }else { 
            check[arr[i]] = 1;
        }
    }

    if (extras.length === 0){
        return arr.reduce((acc, el) => acc + el);
    }else {
        return getMinimumUniqueSum(arr);
    }

}

function checkBelow(num,arr){
    for (let i = num; num > 0; i--){
        if (!arr.includes(i)){return i;}
    }
    return false;
}