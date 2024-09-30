import { json } from '@sveltejs/kit'
import { apiBTLDdataH } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataH, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
