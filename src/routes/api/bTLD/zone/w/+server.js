import { json } from '@sveltejs/kit'
import { apiBTLDdataW } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataW, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
