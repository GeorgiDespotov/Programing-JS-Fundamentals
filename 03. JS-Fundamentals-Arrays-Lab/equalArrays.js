function solve(arr1,arr2){
    let sum = 0;
    let isEqual = true;
    for(i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        } else {
            sum += Number(arr1[i]);
        }
    }
    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10','20','30'], ['10','20','30'])