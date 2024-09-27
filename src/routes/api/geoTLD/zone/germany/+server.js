import { json } from '@sveltejs/kit'
import { apiGeoTLDgermany } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDgermany)
}
