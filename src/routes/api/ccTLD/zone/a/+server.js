import { json } from '@sveltejs/kit'
import { apiCCTLDdataA } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataA, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
