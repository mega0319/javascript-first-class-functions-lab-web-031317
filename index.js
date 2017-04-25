function countdown(callback) {
  window.setTimeout(callback, 2000)

}

function createMultiplier(multiplierValue) {
  return function(num) {
    return num * multiplierValue
  }
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplierValue, value) {
    multiplierValue * value
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
