import { json } from '@sveltejs/kit'
import { apiGeoTLDafrika } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDafrika, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
