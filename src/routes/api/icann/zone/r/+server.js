import { json } from '@sveltejs/kit'
import { icannDataR } from '$lib/shared'

export async function GET(event) {
  return json(icannDataR, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
