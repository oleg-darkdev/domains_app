import { json } from '@sveltejs/kit'
import { apiBTLDdataD } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataD, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
