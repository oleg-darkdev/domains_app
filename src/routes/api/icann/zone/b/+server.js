import { json } from '@sveltejs/kit'
import { icannDataB } from '$lib/shared'

export async function GET(event) {
  return json(icannDataB)
}
