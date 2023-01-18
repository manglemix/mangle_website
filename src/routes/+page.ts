import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    try {
        let response = await fetch('https://manglemix.com/api/blogs?count=5');
        
        return {
            blogs: await response.json()
        };
    } catch (error) {
        
    }

    return {
        blogs: []
    };
}