/*
match_pattern(pattern: int[], candidate: string) → boolean
[1, 2, 1, 2], "cat dog cat dog" → true
[1, 2, 3, 2, 1], "dog ant cat ant dog" → true
[1, 2, 3, 2, 1], "dog ant cat dog dog" → false
[1, 2, 3, 4000], "ant ant ant ant" → true
[1, 2, 3, 4000, 4000], "ant ant ant ant falcon" → false



match_metapattern(metapattern: int[][], candidate: string) → boolean
[ [1, 2], [3, 4] ], "dog cat" → true
[ [1, 2], [2], [1, 2] ], "ant cat falcon" → false
[ [2], [2], [1, 3, 4, 6] ], "ant cat falcon" → false
[ [1, 2], [1], [1, 2] ], "dog cat cat" → true
[ [1], [1, 2], [2, 500] ], "cat dog cat" → true
*/

function matchPattern(pattern, candidate) {
    const canArray = candidate.split(' ');
    let wordcount = {}


    if (pattern.length !== canArray.length) {
        return false;
    }


    // for(let i=0; i < canArray.length; i++){
    //   wordcount[canArray[i]] = (wordcount[canArray[i]] || 0)+1;
    // }


    // if(Object.keys(wordcount).length === 1){
    //   return true;
    // }


    let patternMatcher = {}


    for (let i = 0; i < canArray.length; i++) {

        // if(patternMatcher[canArray[i]]){
        //   if(patternMatcher[canArray[i]] !== pattern[i]){
        //     i = canArray.length;
        //     return false;
        //   }
        // }
        if (patternMatcher[pattern[i]]) {
            if (patternMatcher[pattern[i]] !== canArray[i]) {
                i = canArray.length;
                return false;
            }
        }
        else {
            // patternMatcher[canArray[i]] = pattern[i]
            patternMatcher[pattern[i]] = canArray[i]
        }
    }



    return true;
}

console.log(matchPattern([1, 2, 1, 2], "cat dog cat dog"))
console.log(matchPattern([1, 2, 3, 2, 1], "dog ant cat ant dog"))
console.log(matchPattern([1, 2, 3, 2, 1], "dog ant cat dog dog"))
console.log(matchPattern([1, 2, 3, 4000, 4000], "ant ant ant ant falcon"))
console.log(matchPattern([1, 2, 3, 4000], "ant ant ant ant"))
console.log(matchPattern([1, 2, 3, 4000, 4000], "ant ant ant ant"))