import { json } from '@sveltejs/kit'
import { icannDataH } from '$lib/shared'

export async function GET(event) {
  return json(icannDataH)
}
