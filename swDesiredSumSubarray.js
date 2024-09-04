

/**
 * Given a array of positive integers, find the subarrays of integers that add up to a given number.
 *
 * If you want to see the video description of this algorithm, you can find it here: https://www.youtube.com/watch?v=jM2dhDPYMQM
 * It has animated description and several interview questions and their solutions in it.
 *
 * @param inputArr - An array of positive integers.
 * @param desiredSum - The desired sum as an integer.
 * @returns {[]} - An array of subarrays that add up to the desired sum.
 */
// O(n)
function swDesiredSumSubarray(inputArr, desiredSum) {
    // current window sum and window sum start index
    let sum = 0;
    let sumStartIndex = 0
    const solutions = []

    inputArr.forEach((item, index) => {
        sum += item

        while (sum > desiredSum) {
            sum -= inputArr[sumStartIndex]
            sumStartIndex++
        }

        if (sum === desiredSum) solutions.push(inputArr.filter((_, i) => i >= sumStartIndex && i <= index))
    })

    return solutions
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [1, 7, 9, 4, 3, 2, 2]
const desiredSum1 = 7
const solution1 = [[7], [4, 3], [3, 2, 2]]

const calculatedSolution1 = swDesiredSumSubarray(exampleInput1, desiredSum1)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Desired Sum: ${desiredSum1}, Solution: ${JSON.stringify(calculatedSolution1)}`)

// test case #2
const exampleInput2 = [23, 1, 6, 9, 15, 8]
const desiredSum2 = 24
const solution2 = [[23, 1], [9, 15]]

const calculatedSolution2 = swDesiredSumSubarray(exampleInput2, desiredSum2)

console.log(`Example Input #2: ${JSON.stringify(exampleInput2)}, Desired Sum: ${desiredSum2}, Solution: ${JSON.stringify(calculatedSolution2)}`)

// test case #3
// sliding window technique cannot handle negative numbers in this case so solution will not be full
const exampleInput3 = [-1, -4, 0, 5, 3, 2, 1]
const desiredSum3 = 5
const solution3 = [[-1, -4, 0, 5, 3, 2], [5], [3, 2]]

const calculatedSolution3 = swDesiredSumSubarray(exampleInput3, desiredSum3)

console.log(`Example Input #3: ${JSON.stringify(exampleInput3)}, Desired Sum: ${desiredSum3}, Solution (some missing): ${JSON.stringify(calculatedSolution3)}`)
