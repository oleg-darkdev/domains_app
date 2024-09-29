import { json } from '@sveltejs/kit';
import { apiCCTLDallAll } from '$lib/shared'


export async function GET(event) {
  return json(apiCCTLDallAll, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })}
