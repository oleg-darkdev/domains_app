import { json } from '@sveltejs/kit'
import { icannDataX } from '$lib/shared'

export async function GET(event) {
  return json(icannDataX, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
