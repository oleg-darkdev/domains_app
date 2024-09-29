import { json } from '@sveltejs/kit'
import { apiBTLDdataE } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataE, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
