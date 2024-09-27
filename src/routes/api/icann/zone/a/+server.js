import { json } from '@sveltejs/kit'
import { icannDataA } from '$lib/shared'

export async function GET(event) {
  return json(icannDataA)
}
