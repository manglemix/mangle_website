import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    let response = await fetch('https://manglemix.com/api/blogs?count=5');

    if (!response.ok) {
        throw error(500, "Could not load blogs");
    }

    return {
        blogs: await response.json()
    };
}