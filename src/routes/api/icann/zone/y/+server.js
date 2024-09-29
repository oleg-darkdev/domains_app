import { json } from '@sveltejs/kit'
import { icannDataY } from '$lib/shared'

export async function GET(event) {
  return json(icannDataY, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
