import { json } from '@sveltejs/kit'
import { icannDataC } from '$lib/shared'

export async function GET(event) {
  return json(icannDataC, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
