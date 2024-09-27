import { json } from '@sveltejs/kit'
import { apiCCTLDdataY } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataY)
}
