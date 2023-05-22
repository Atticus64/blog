// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Jonathan Blog";
export const SITE_DESCRIPTION =
	"Welcome to my blog! I write about modern web development and my learning journey";
export const TWITTER_HANDLE = "@tylung_dev";
export const MY_NAME = "Jonathan";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
