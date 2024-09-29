import { json } from '@sveltejs/kit'
import { apiCCTLDdataN } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataN, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
