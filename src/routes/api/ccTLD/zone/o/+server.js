import { json } from '@sveltejs/kit'
import { apiCCTLDdataO } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataO, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
