function solve(n,array){

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i]=array[i];
    }

   let line ='';
   for (let index = arr.length-1; index >= 0; index--) {
    line+=arr[index]+' '
    
   }
   console.log(line);

}
solve(3, [10, 20, 30, 40, 50])