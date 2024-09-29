import { json } from '@sveltejs/kit'
import { apiCCTLDdataS } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataS, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
