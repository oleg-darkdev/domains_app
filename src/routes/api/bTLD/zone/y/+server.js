import { json } from '@sveltejs/kit'
import { apiBTLDdataY } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataY)
}
