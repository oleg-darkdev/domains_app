import { json } from '@sveltejs/kit'
import { apiGeoTLDspain } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDspain, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
