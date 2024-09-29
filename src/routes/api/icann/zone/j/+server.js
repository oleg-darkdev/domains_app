import { json } from '@sveltejs/kit'
import { icannDataJ } from '$lib/shared'

export async function GET(event) {
  return json(icannDataJ, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
