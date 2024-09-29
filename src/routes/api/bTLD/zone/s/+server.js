import { json } from '@sveltejs/kit'
import { apiBTLDdataS } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataS, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
