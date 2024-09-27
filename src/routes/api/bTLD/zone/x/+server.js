import { json } from '@sveltejs/kit'
import { apiBTLDdataX } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataX)
}
