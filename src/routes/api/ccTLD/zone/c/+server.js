import { json } from '@sveltejs/kit'
import { apiCCTLDdataC } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataC, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
