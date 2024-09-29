import { json } from '@sveltejs/kit'
import { icannDataE } from '$lib/shared'

export async function GET(event) {
  return json(icannDataE, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
