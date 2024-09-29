import { json } from '@sveltejs/kit';
import { apiGeoTLDAll } from '$lib/shared'


export async function GET(event) {
  return json(apiGeoTLDAll, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
