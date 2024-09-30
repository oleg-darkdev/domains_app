import { json } from '@sveltejs/kit'
import { apiBTLDdataI } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataI, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
