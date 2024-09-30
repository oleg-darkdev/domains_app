import { json } from '@sveltejs/kit'
import { apiBTLDdataR } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataR, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
