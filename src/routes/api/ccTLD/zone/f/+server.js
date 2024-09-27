import { json } from '@sveltejs/kit'
import { apiCCTLDdataF } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataF)
}
