const flatten = function(arr) {


  let x = []
    for( let i = 0; i < arr.length; i++){

     if(Array.isArray(arr[i]) = false) {

      x = arr.push[i]
      

      // } else if (Array.isArray(arr[i] = true)) {

      //   arr.splice[i]

      


    }
    }


}



console.log(flatten([1,2,[3,4],5,[6]]))



