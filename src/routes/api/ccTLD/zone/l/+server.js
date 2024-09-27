import { json } from '@sveltejs/kit'
import { apiCCTLDdataL } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataL)
}
