import { json } from '@sveltejs/kit'
import { apiCCTLDdataV } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataV)
}
