function solve(array){

    let length= array.length;
    for (let index = 0; index < length-1; index++) {
       let condensed =[];

       for (let i = 0; i< array.length-1; i++) {
        
        condensed[i] = array[i]+array[i+1];
        
       }
       array = condensed;
        
    }
    console.log(array[0]);

}
solve([5,0,4,1,2]);