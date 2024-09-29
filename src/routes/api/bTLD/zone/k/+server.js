import { json } from '@sveltejs/kit'
import { apiBTLDdataK } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataK, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
