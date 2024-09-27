import { json } from '@sveltejs/kit';
import { icannDataAll } from '$lib/shared'


export async function GET(event) {
	return json(icannDataAll)
}
