import { json } from '@sveltejs/kit'
import { icannDataP } from '$lib/shared'

export async function GET(event) {
  return json(icannDataP, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
