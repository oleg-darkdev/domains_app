import { json } from '@sveltejs/kit'
import { apiBTLDdataV } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataV, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
