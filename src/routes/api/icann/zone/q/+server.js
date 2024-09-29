import { json } from '@sveltejs/kit'
import { icannDataQ } from '$lib/shared'

export async function GET(event) {
  return json(icannDataQ, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
