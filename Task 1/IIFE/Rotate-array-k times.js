let array2 = [1,2,3,4,5,6,7,8];
let rotate_IIFE = ( (array,t) => {
    console.log(array.concat(array.splice(0,t)));
})(array2,times);