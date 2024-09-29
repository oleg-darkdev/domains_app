import { json } from '@sveltejs/kit'
import { icannDataF } from '$lib/shared'

export async function GET(event) {
  return json(icannDataF, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
