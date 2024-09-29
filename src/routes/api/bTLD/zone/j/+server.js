import { json } from '@sveltejs/kit'
import { apiBTLDdataJ } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataJ, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
