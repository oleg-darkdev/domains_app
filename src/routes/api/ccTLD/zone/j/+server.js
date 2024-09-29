import { json } from '@sveltejs/kit'
import { apiCCTLDdataJ } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataJ, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
