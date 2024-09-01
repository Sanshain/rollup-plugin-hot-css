import type { Plugin } from "rollup";

type PluginOptions = {
    include?: RegExp,    
    file?: string,
    extensions?: string[],
    loaders?: Array<string | Function>,
    hot?: boolean,
    url?: string,
    publicPath?: string
}

export default function(options?: PluginOptions): Plugin;