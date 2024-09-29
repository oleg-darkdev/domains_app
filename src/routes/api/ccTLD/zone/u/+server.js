import { json } from '@sveltejs/kit'
import { apiCCTLDdataU } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataU, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
