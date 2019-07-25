
//    1






// function isNumberMin ( numberMin , numberMax ) {
//     if ( numberMin >= numberMax ) {
//         return false ;
//     }
//     return true ;
// }

// function maxArrDigits ( arr , number ) {
//     let newArr = [] ;
//     for ( let i = 0 ; i < arr.length ; i++ ) {
//         if ( isNumberMin( number , arr[i] ) ) {
//             newArr.push( arr[i] ) ;
//         }
//     }
//     if ( newArr.length === 0 ) {
//         return 'Such values do not exist.' ;
//     }
//     return newArr ;
// }

// console.log ( maxArrDigits( [1, 1, 2, -3, 0, 8, 4, 0], 16 ) ) ;






//        2






// function isDigitEven ( number ) {
//     if ( number % 2 !== 0 ) {
//         return false ;
//     }
//     return true ;
// }
 

// function isOllDigitsEven ( number ) {
//     let str = '' ;
//     str += number ;
//     for ( let i = 0 ; i < str.length ; i++ ) {
//         if ( !( isDigitEven( str[i] ) ) ) {
//             return false ;
//         }
//     }
//     return true ;
// }


// function getNumbersOfDigititsEven ( numberOne , numberTwo ) {
//     let str = '' ;
//     let sum = 0 ;  // Sum փոփոխականը պահել եմ դիմացի ստորակի չգրելու համար ։
//     for ( let i = numberOne ; i < numberTwo ; i++ ) {
//         if ( isOllDigitsEven( i ) ) {
//             sum++ ;
//             if ( sum === 1 ) {
//                 str += i ;
//             } else {
//                 str += ',' + i ;
//             }
//         }
//     }
//     if ( str.length !== 0 ) {
//         return str ;
//     } else {
//         return 'Such numbers does not exist.' ;
//     }
// }

// console.log ( getNumbersOfDigititsEven( 19 , 199 ) ) ;





//        3







// function isOllDigitsAreOdd ( number ) {

//     if ( number <= 0 ) {
//         return true ;
//     }

//     if ( ( number % 10 ) % 2 === 0 ) {
//         return false ;
//     } 
//     let sum = ( ( number - ( number % 10 ) ) / 10 ) ;
//     return isOllDigitsAreOdd( sum ) ;
// }

// console.log( isOllDigitsAreOdd( 7791 ) ) ;




//          4







// let arr = [-5, -9, -111, -1000, -7, -111111, -458, -48955, 10] ;
// let min = arr[0] ;

// function havePositiveNumber( arr ) {
//     if ( arr.length === 0 ) {
//         return -1 ;
//     }
//     if ( arr[0] >= 0 ) {
//         return arr[0] ;
//     }
//     arr.shift() ;
//     return havePositiveNumber( arr ) ;
// }


// function findMinPositiveNumber ( min ) {
//     if ( min === -1 ) {
//         return -1 ;
//     }
//     if ( arr.length === 0 ) {
//         return min ;
//     }
//     arr.shift() ;
//     if ( min > arr[0] && arr[0] >= 0 ) {
//         min = arr[0] ;
//         return findMinPositiveNumber( arr[0] ) ;
//     }
//     return findMinPositiveNumber( min ) ;
// } 

// console.log( findMinPositiveNumber(havePositiveNumber( arr )) ) ;






//           5






// function isDigitAreMax ( number , previous , current ) {
//     debugger ;
//         if ( number > previous && number > current ) {
//             return false ;
//         }
//     return true ;
// }

// function findErrorIndex ( arr ) {
//     debugger ;
//     arr.unshift(undefined) ;
//     arr.push(undefined) ;

//     for ( let i = 1 ; i < arr.length - 1 ; i++ ) {
//         if ( !( isDigitAreMax( arr[i] , arr[i - 1] , arr[i + 1] ) ) ) {
//             return i ;
//         }
//     }
//     return -1 ;
// }

// console.log( findErrorIndex( [2, 12, 15, 48, 64] ) ) ;