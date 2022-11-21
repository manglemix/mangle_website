import { error } from '@sveltejs/kit';
import { page } from '$app/stores';


/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    let splitted = url.origin.split(":");
    
    let response = await fetch(splitted[0] + ":" + splitted[1] + ':10000/blogs?count=5');

    if (!response.ok) {
        throw error(500, "Could not load blogs");
    }

    return {
        blogs: await response.json()
    };
}