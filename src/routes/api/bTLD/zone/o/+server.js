import { json } from '@sveltejs/kit'
import { apiBTLDdataO } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataO, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
