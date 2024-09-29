import { json } from '@sveltejs/kit'
import { icannDataS } from '$lib/shared'

export async function GET(event) {
  return json(icannDataS, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
