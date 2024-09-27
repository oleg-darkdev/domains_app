import { json } from '@sveltejs/kit'
import { apiBTLDdataF } from '$lib/shared'

export async function GET(event) {
  return json(apiBTLDdataF)
}
