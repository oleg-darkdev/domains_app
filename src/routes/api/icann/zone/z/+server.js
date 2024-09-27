import { json } from '@sveltejs/kit'
import { icannDataZ } from '$lib/shared'

export async function GET(event) {
  return json(icannDataZ)
}
