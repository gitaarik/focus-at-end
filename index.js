module.exports = function(input) {
    input.focus()
    input.selectionStart = input.selectionEnd = input.value.length
}
