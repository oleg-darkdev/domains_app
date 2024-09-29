import { json } from '@sveltejs/kit'
import { apiCCTLDdataP } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataP, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
