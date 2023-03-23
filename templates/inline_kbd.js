const {$} = require("./helpers/html.helpers");
const {data_attributes} = require("./helpers/render.helpers");

module.exports = function ({node}) {
    const keys = node.getAttribute('keys');
    if (keys.length === 1) {
        return $('kdb', {class: 'key', ...data_attributes(node)}, keys[0]);
    } else {
        return $('kdb', {class: 'keyseq', ...data_attributes(node)},
            keys.map((key, idx) => {
                $([
                    (idx === 0 ? '+' : ''),
                    $('kdb', {class: 'key'}, key)
                ])
            })
        )
    }
}
