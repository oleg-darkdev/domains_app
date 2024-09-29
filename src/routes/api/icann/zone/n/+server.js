import { json } from '@sveltejs/kit'
import { icannDataN } from '$lib/shared'

export async function GET(event) {
  return json(icannDataN, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
