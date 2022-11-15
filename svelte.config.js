import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
		adapter: adapter({
      out: 'production/build',
      precompress: true
    })
  }
};
