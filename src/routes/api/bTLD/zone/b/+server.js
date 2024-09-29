import { json } from '@sveltejs/kit'
import { apiBTLDdataB } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataB, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
