import { json } from '@sveltejs/kit'
import { apiBTLDdataN } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataN, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
