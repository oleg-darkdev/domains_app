import { json } from '@sveltejs/kit'
import { icannDataW } from '$lib/shared'

export async function GET(event) {
  return json(icannDataW, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
