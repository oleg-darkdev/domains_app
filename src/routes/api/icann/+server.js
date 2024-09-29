import { json } from '@sveltejs/kit';
import { icannDataAll } from '$lib/shared'


export async function GET(event) {
  return json(icannDataAll, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
