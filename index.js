import * as path from "path";
import * as url from 'url';
import * as attachedColistTreeprocessorExt from "./extensions/attached_colist_treeprocessor.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export function registerExtensions(registry){
    attachedColistTreeprocessorExt.register(registry);
}

export const BASE_OPTIONS = {
    catalog_assets: true,
    safe: 'unsafe',
    backend: 'html',
    template_dirs: [path.resolve(__dirname, './templates')],
}

export {HELPERS, TEMPLATES} from './index.cjs'
