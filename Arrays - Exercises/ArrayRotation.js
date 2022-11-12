function Rotate(array, timesToRotate) {

   while(timesToRotate>0){

    let first = array[0];

    array.shift();
    array.push(first);

    timesToRotate--;

   }
   console.log(array.join(' '))


}
Rotate([51, 47, 32, 61, 21], 2)