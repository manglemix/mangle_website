import { json } from '@sveltejs/kit';


/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
  return json(request.geo);
}