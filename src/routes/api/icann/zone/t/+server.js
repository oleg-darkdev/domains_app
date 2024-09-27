import { json } from '@sveltejs/kit'
import { icannDataT } from '$lib/shared'

export async function GET(event) {
  return json(icannDataT)
}
