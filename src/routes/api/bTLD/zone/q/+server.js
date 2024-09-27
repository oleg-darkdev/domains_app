import { json } from '@sveltejs/kit'
import { apiBTLDdataQ } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataQ)
}
