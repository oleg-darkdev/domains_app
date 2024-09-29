import { json } from '@sveltejs/kit'
import { apiCCTLDdataH } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataH, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
