import { json } from '@sveltejs/kit'
import { apiCCTLDdataZ } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataZ)
}
