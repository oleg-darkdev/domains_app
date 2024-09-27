import { json } from '@sveltejs/kit'
import { apiCCTLDdataI } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataI)
}
