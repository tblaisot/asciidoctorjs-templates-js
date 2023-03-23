const {$, $div, $metaIf} = require("./helpers/html.helpers");
const {isEmptyString} = require("./helpers/utils.helpers");
const {templateHeader} = require("./_header");
const {templateFooter} = require("./_footer");
const {footnotesTemplate} = require("./_footnotes");

module.exports = function ({node}) {
    const document_content = node.getContent();
    const docinfo_content = node.getDocinfo();
    const docinfo_content_header = node.getDocinfo('header');
    return $(
        'html',
        {lang: node.hasAttribute('nolang') ? '' : node.getAttribute('lang', 'en')},
        $(
            'head',
            {},
            $('meta', {charset: node.getAttribute('encoding', 'UTF-8')}),
            $('meta', {'http-equiv': "X-UA-Compatible", content: "IE=edge"}),
            $('meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}),
            $('meta', {name: 'generator', content: `Asciidoctor ${node.getAttribute('asciidoctor-version')}`}),
            $metaIf('application-name', node.getAttribute('app-name')),
            $metaIf('author', node.getAttribute('authors')),
            $metaIf('copyright', node.getAttribute('copyright')),
            $metaIf('description', node.getAttribute('description')),
            $metaIf('keywords', node.getAttribute('keywords')),
            $('title', {}, node.getDoctitle() || node.getAttribute('untitled-label')),
            !isEmptyString(docinfo_content) ? docinfo_content : '',
        ),
        $(
            'body',
            {
                id: node.getId(),
                class: [
                    node.getAttribute('doctype'),
                    ...(
                        (node.getAttribute('toc-class') && node.getAttribute('toc-placement') === 'auto')
                            ? [
                                node.getAttribute('toc-class'),
                                node.getAttribute('toc-position', 'left'),
                            ]
                            : []
                    ),
                    node.getAttribute('docrole') || node.getAttribute('role'),
                ],
                style: {
                    'max-width': node.getAttribute('max-width')
                }
            },
            !isEmptyString(docinfo_content_header) ? docinfo_content_header : '',
            // header
            node.hasAttribute('noheader')
                ? ''
                : $('header', {}, templateHeader(node)),
            // content
            $div({id: 'content'}, document_content),
            //footnotes
            (node.hasFootnotes() && !node.hasAttribute('nofootnotes'))
                ? ''
                : footnotesTemplate(node),
            //footer
            node.hasAttribute('nofooter')
                ? ''
                : $('footer', {}, templateFooter(node))
        )
    )
}
