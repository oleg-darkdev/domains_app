import { json } from '@sveltejs/kit'
import { apiBTLDdataT } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataT, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
