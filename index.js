import * as path from "path";
import asciidoctorFactory from "@asciidoctor/core";
import * as highlightJsExt from "asciidoctor-highlight.js";
import * as url from 'url';
import * as attachedColistTreeprocessorExt from "./extensions/attached_colist_treeprocessor.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const asciidoctor = asciidoctorFactory();

// Register the extension into custom registry.
const registry = asciidoctor.Extensions.create();
highlightJsExt.register(registry);
attachedColistTreeprocessorExt.register(registry);

export const REGISTRY = registry;
export const BASE_OPTIONS = {
    extension_registry: registry,
    attributes: {'source-highlighter': 'highlightjs-ext'},
    catalog_assets: true,
    safe: 'unsafe',
    backend: 'html',
    template_dirs: [path.resolve(__dirname, './templates')],
}

export {HELPERS, TEMPLATES} from './index.cjs'
