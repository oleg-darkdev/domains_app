import { json } from '@sveltejs/kit'
import { icannDataD } from '$lib/shared'

export async function GET(event) {
  return json(icannDataD)
}
