import { json } from '@sveltejs/kit'
import { apiCCTLDdataM } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataM, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
