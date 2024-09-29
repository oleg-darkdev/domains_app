import { json } from '@sveltejs/kit'
import { icannDataU } from '$lib/shared'

export async function GET(event) {
  return json(icannDataU, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
