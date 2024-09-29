import { json } from '@sveltejs/kit'
import { apiBTLDdataM } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataM, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
