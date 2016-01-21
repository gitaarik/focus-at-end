module.exports = function(input) {
    input.focus()
    var val = input.value
    input.value = ''
    input.value = val
}
