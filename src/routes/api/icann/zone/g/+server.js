import { json } from '@sveltejs/kit'
import { icannDataG } from '$lib/shared'

export async function GET(event) {
  return json(icannDataG)
}
