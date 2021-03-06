import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import staticAdapter from "@sveltejs/adapter-static"
/** @type {import('@sveltejs/kit').Config} */

const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		adapter: staticAdapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

    preprocess: [preprocess({}), mdsvex(mdsvexConfig)]
};

export default config;

