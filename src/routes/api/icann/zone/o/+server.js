import { json } from '@sveltejs/kit'
import { icannDataO } from '$lib/shared'

export async function GET(event) {
  return json(icannDataO)
}
