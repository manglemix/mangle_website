import { error } from '@sveltejs/kit';
import { page } from '$app/stores';


/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    let response = await fetch(url.origin + 'api/blogs?count=5');

    if (!response.ok) {
        throw error(500, "Could not load blogs");
    }

    return {
        blogs: await response.json()
    };
}