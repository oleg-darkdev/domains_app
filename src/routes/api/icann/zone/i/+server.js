import { json } from '@sveltejs/kit'
import { icannDataI } from '$lib/shared'

export async function GET(event) {
  return json(icannDataI)
}
