import { json } from '@sveltejs/kit';
import {
  apiBTLDall,
  apiCCTLDallAll,
  icannDataAll,
  apiGeoTLDAll,
} from '$lib/shared'

const allDomains = [].concat(
  apiBTLDall,
  apiCCTLDallAll,
  icannDataAll,
  apiGeoTLDAll,
);

export async function GET(event) {
  return json(allDomains, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}



