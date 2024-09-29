import { json } from '@sveltejs/kit'
import { apiCCTLDdataR } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataR, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
