import { json } from '@sveltejs/kit'
import { apiGeoTLDeurope } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDeurope, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
