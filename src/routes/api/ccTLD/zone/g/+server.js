import { json } from '@sveltejs/kit'
import { apiCCTLDdataG } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataG)
}
