import { json } from '@sveltejs/kit'
import { apiBTLDdataU } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataU, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
