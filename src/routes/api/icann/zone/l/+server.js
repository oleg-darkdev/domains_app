import { json } from '@sveltejs/kit'
import { icannDataL } from '$lib/shared'

export async function GET(event) {
  return json(icannDataL, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
