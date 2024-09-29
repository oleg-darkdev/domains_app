import { json } from '@sveltejs/kit'
import { apiGeoTLDnorthAmerica } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDnorthAmerica, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
