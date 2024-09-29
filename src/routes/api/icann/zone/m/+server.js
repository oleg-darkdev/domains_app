import { json } from '@sveltejs/kit'
import { icannDataM } from '$lib/shared'

export async function GET(event) {
  return json(icannDataM, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
