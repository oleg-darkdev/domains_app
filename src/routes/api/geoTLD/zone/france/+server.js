import { json } from '@sveltejs/kit'
import { apiGeoTLDfrance } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDfrance)
}
