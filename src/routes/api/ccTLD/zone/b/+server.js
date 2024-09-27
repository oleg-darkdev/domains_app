import { json } from '@sveltejs/kit'
import { apiCCTLDdataB } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataB)
}
