import { json } from '@sveltejs/kit'
import { apiGeoTLDoceania } from '$lib/shared'

export async function GET(event) {
  return json(apiGeoTLDoceania)
}
