import { json } from '@sveltejs/kit'
import { apiCCTLDdataK } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataK, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
