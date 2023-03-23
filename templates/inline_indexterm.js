module.exports = function ({node}) {
    if (node.getType()) {
        return node.getText()
    }
    return ''
}
