var a = [1, 2, 3], b = [101, 2, 1, 10]
var c = a.concat(b)
var d = c.filter((item, pos) => c.indexOf(item) === pos)

console.log(d)