import { json } from '@sveltejs/kit'
import { apiCCTLDdataX } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataX)
}
