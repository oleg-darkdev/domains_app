import { json } from '@sveltejs/kit'
import { apiBTLDdataP } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataP)
}
