/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.request.method == 'OPTIONS') return new Response(new Blob(), { status: 200 });

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => name.startsWith('access-')
	});

	return response;
}
