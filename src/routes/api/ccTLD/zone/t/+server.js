import { json } from '@sveltejs/kit'
import { apiCCTLDdataT } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataT)
}
