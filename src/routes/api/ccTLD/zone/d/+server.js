import { json } from '@sveltejs/kit'
import { apiCCTLDdataD } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataD, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
