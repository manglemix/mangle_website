import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter({
			out: 'mangle_website_production/build',
			precompress: true
		})
	}
};
