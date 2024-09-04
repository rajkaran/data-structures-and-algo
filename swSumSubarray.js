/**
 * Given an array of integers, find maximum sum subarray of the required size.
 *
 * If you want to see the video description of this algorithm, you can find it here: https://www.youtube.com/watch?v=jM2dhDPYMQM
 * It has animated description and several interview questions and their solutions in it.
 *
 * @param inputArr - An array of integers.
 * @param subarraySize - Desired subarray size as a positive integer.
 * @returns [] - A subarray of size {subarraySize} that has the maximum possible sum.
 */
// O(n)
function swMaxSubarray(inputArr, subarraySize) {
    let currentSum = 0
    let maxSum = 0;
    let maxSumStartIndex = 0

    // iterate entire array from left to right
    inputArr.forEach((number, index) => {
        // increase the window size by one from the right
        currentSum += number

        if (index < subarraySize) {
            // continue to accumulate until we reach the desired subarray size (= max window size)
            maxSum = currentSum
        } else {
            // we are over the max window size so remove one element from the left
            currentSum -= inputArr[index - subarraySize]

            if (currentSum > maxSum) {
                // we have a new maximum sum window so record its starting index
                maxSum = currentSum
                maxSumStartIndex = (index - subarraySize) + 1
            }
        }
    })

    return inputArr.slice(maxSumStartIndex, maxSumStartIndex + subarraySize)
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [-1, 2, 3, 0, -3, 9]
const subarraySize1 = 2
const solution1 = [-3, 9]

const calculatedSolution1 = swMaxSubarray(exampleInput1, subarraySize1)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Subarray Size: ${subarraySize1}, Solution: ${JSON.stringify(calculatedSolution1)}`)

// test case #2
const exampleInput2 = [6, 0, -1, 2, 1, -3, 4]
const subarraySize2 = 3
const solution2 = [6, 0, -1]

const calculatedSolution2 = swMaxSubarray(exampleInput2, subarraySize2)

console.log(`Example Input #2: ${JSON.stringify(exampleInput2)}, Subarray Size: ${subarraySize2}, Solution: ${JSON.stringify(calculatedSolution2)}`)

// test case #3
const exampleInput3 = [6, -3, -5, 1, 2, 0, 4]
const subarraySize3 = 4
const solution3 = [1, 2, 0, 4]

const calculatedSolution3 = swMaxSubarray(exampleInput3, subarraySize3)

console.log(`Example Input #3: ${JSON.stringify(exampleInput3)}, Subarray Size: ${subarraySize3}, Solution: ${JSON.stringify(calculatedSolution3)}`)
