import { json } from '@sveltejs/kit'
import { apiCCTLDdataQ } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataQ)
}
