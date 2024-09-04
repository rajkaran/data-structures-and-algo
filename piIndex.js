
/***
Pretend pi is: 31415926510134
Pi:    3 1 4 1 5 9 2 6 5  1  0  1  3  4
Index: 1 2 3 4 5 6 7 8 9 10 11 12 13 14
               ^                   ^
Index 5 matches
Index 13 matches
No others match

Assuming you are given the first million (10^6) digits of pi,
write a function to print out all of the indices where the index
matches the value at that index.

Pi:    3 1 4 1 5 9 2 6 5  1  0  1  3  4 ...  1  0   0
Index: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 ... 98 99 100
               ^                   ^                ^
 */


/**
* * What problems might we run into if we had 50 billion (50*10^9) digits of pi instead?
* How might we process that much data?
*/

/**
 * * You now have a getNextDigit() -> int generator function that returns the next digit 
 of pi each time it is called. Use it to modify your function to work using less memory.
 */

function piIndex(string){
    console.log(typeof string)
  let chars = string.split('')
  // console.log(chars)

  for(let i = 0, len = chars.length; i < len; i++){
    // console.log(i, chars[i])
    if(i+1 === parseInt(chars[i]) ){
      console.log(`found a match ${i}, ${i+1} = ${chars[i]}`)
    }
    else if(i > 9){
      let indexParts = (i+1).toString().split('')
      // console.log('start considering 2 indesex', indexParts)

      if(indexParts[indexParts.length-1] === chars[i]){
        for(let j = indexParts.length-2; j >= 0; j--){
          // console.log(indexParts[j])
          if(chars[i-1] === indexParts[j]){
            console.log(`found the combination ${i} ${i+1} ${indexParts[1]} === ${chars[i]} ${chars[i-1]} === ${indexParts[0]}`)
          }
        }
      }
      
      
    }
  }

  return []

 }

 console.log(piIndex('31415926510134'))