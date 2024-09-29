import { json } from '@sveltejs/kit'
import { apiBTLDall } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDall, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
