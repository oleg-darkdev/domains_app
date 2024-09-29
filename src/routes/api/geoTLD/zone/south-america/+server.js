import { json } from '@sveltejs/kit'
import { apiGeoTLDsouthAmerica } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDsouthAmerica, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
