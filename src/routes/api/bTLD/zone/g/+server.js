import { json } from '@sveltejs/kit'
import { apiBTLDdataG } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataG, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
