const arr = [14, 21, 2, 77, 8, 87, 9, 88, 42, 99]
let min = Number.POSITIVE_INFINITY
for (const value of arr) {
  min = Math.min(min, value)
}
console.log("Smallest number in the array:", min);