import { json } from '@sveltejs/kit'
import { apiBTLDdataC } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataC, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
