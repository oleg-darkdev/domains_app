import { json } from '@sveltejs/kit'
import { apiCCTLDdataW } from '$lib/shared'

export async function GET(event) {
  return json(apiCCTLDdataW)
}
