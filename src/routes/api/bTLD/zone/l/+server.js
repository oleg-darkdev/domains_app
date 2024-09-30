import { json } from '@sveltejs/kit'
import { apiBTLDdataL } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataL, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
