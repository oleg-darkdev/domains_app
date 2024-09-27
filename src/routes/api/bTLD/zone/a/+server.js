import { json } from '@sveltejs/kit'
import { apiBTLDdataA } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataA)
}
