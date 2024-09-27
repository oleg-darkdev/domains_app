import { json } from '@sveltejs/kit'
import { icannDataV } from '$lib/shared'

export async function GET(event) {
  return json(icannDataV)
}
