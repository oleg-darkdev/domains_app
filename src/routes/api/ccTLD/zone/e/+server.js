import { json } from '@sveltejs/kit'
import { apiCCTLDdataE } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataE)
}
